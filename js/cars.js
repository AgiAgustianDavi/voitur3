document.addEventListener('DOMContentLoaded', function() {
        var detailButtons = document.querySelectorAll('.btn-outline-light');
        
        detailButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                var targetId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
                showSection(targetId);
                scrollToSection(targetId);
                startCounterAnimation();
            });
        });
    
        var carousel = document.getElementById('carouselExampleCaptions');
        carousel.addEventListener('slide.bs.carousel', function() {
            hideAllSections();
        });
    });
    
    function showSection(sectionId) {
        hideAllSections();
    
        var targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = 'block';
        }
    }
    
    function hideAllSections() {
        var allSections = document.querySelectorAll('.car-stats');
    
        allSections.forEach(function(section) {
            section.style.display = 'none';
        });
    }
    
    function scrollToSection(sectionId) {
        var targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const counters = document.querySelectorAll('.counter');

function updateCounter(counter, target, speed) {
    const count = +counter.innerText;

    if (count < target) {
        counter.innerText = count + speed;
        setTimeout(() => updateCounter(counter, target, speed), speed);
    } else {
        counter.innerText = target;
    }
}

function startCounterAnimation() {
    counters.forEach((counter) => {
        const target = +counter.getAttribute('data-target');
        const speed = +counter.getAttribute('data-speed');
        updateCounter(counter, target, speed);
    });
}

    