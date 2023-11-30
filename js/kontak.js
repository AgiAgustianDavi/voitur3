document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let formIsValid = true;

        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(function (input) {
            const errorDiv = input.nextElementSibling;

            if (input.value.trim() === '') {
                input.style.borderBottom = '1px solid red';
                const errorMessage = getErrorMessage(input.id);
                if (!errorDiv) {
                    input.insertAdjacentHTML('afterend', `<div class="error-message" style="color: red;">${errorMessage}</div>`);
                } else {
                    errorDiv.textContent = errorMessage;
                    errorDiv.style.color = 'red';
                }
                formIsValid = false;
            } else if (input.id === 'email' && !validateEmail(input.value)) {
                input.style.borderBottom = '1px solid red';
                const errorMessage = 'Sorry, your email is not valid';
                if (!errorDiv) {
                    input.insertAdjacentHTML('afterend', `<div class="error-message" style="color: red;">${errorMessage}</div>`);
                } else {
                    errorDiv.textContent = errorMessage;
                    errorDiv.style.color = 'red';
                }
                formIsValid = false;
            } else {
                input.style.borderBottom = '1px solid green';
                if (errorDiv) {
                    input.parentNode.removeChild(errorDiv);
                }
            }
        });

        if (formIsValid) {
            form.submit();
            alert('Form successfully submitted!'); // Pesan yang ditampilkan setelah formulir berhasil dikirim
        }
    });

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function getErrorMessage(inputId) {
        switch (inputId) {
            case 'name':
                return 'Please enter your name';
            case 'email':
                return 'Please enter your email';
            case 'message':
                return 'Please enter your message';
            default:
                return 'Field cannot be empty';
        }
    }
});
