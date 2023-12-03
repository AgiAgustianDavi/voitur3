document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const feedbackMessage = document.getElementById('feedbackMessage');
    const feedbackModal = new bootstrap.Modal(document.getElementById('feedbackModal'));

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const inputs = form.querySelectorAll('input, textarea');
        let formIsValid = true;

        inputs.forEach(function (input) {
            const errorDiv = input.nextElementSibling;
            const errorMessage = getErrorMessage(input.id, input.value);

            if (input.value.trim() === '') {
                setInvalidInput(input, errorDiv, errorMessage);
                formIsValid = false;
            } else if (input.id === 'email' && !validateEmail(input.value)) {
                setInvalidInput(input, errorDiv, 'Sorry, your email is not valid');
                formIsValid = false;
            } else {
                setValidInput(input, errorDiv);
            }
        });

        if (formIsValid && confirm('Anda yakin untuk mengirim ini?')) {
            const formSubmittedSuccessfully = true;
            const message = formSubmittedSuccessfully ? 'Pesan Anda berhasil terkirim' : 'Maaf, terdapat kesalahan, coba lagi nanti';
            showFeedbackModal(message, formSubmittedSuccessfully ? 'success' : 'error');

            feedbackModal._element.addEventListener('hidden.bs.modal', function () {
                if (formSubmittedSuccessfully) {
                    setTimeout(function() {
                        location.reload();
                    }, 500); // Delay 500 milidetik sebelum merefresh halaman
                }
            });
        }
    });


    const messageInput = document.getElementById('message');
    messageInput.addEventListener('input', function () {
        const errorDiv = messageInput.nextElementSibling;
        if (messageInput.value.trim() !== '' && errorDiv) {
            setValidInput(messageInput, errorDiv);
        }
    });

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function getErrorMessage(inputId, value) {
        const errorMessages = {
            name: 'Please enter your name',
            email: validateEmail(value) ? 'Please enter a valid email' : 'Sorry, your email is not valid',
            message: 'Please enter your message',
            default: 'Field cannot be empty'
        };
        return errorMessages[inputId] || errorMessages.default;
    }

    function setInvalidInput(input, errorDiv, errorMessage) {
        input.classList.add('is-invalid');
        if (!errorDiv) {
            input.insertAdjacentHTML('afterend', `<div class="invalid-feedback">${errorMessage}</div>`);
        } else {
            errorDiv.textContent = errorMessage;
            errorDiv.style.color = 'red';
        }
    }

    function setValidInput(input, errorDiv) {
        input.classList.remove('is-invalid');
        if (errorDiv) {
            input.parentNode.removeChild(errorDiv);
        }
    }

    function showFeedbackModal(message, type) {
        feedbackMessage.textContent = message;
        feedbackMessage.classList.add(type === 'success' ? 'text-success' : 'text-danger');
        feedbackMessage.classList.remove(type === 'success' ? 'text-danger' : 'text-success');
        feedbackModal.show();
    }
});
