document.addEventListener('DOMContentLoaded', function () {

    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const htmlElement = document.documentElement;

    const moonIcon = 'bi-moon-fill';
    const sunIcon = 'bi-sun-fill';

    let currentTheme = localStorage.getItem('theme') || 
                       (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    htmlElement.setAttribute('data-bs-theme', currentTheme);
    updateIcon(currentTheme);

    function updateIcon(theme) {
        if (theme === 'dark') {
            themeIcon.classList.remove(moonIcon);
            themeIcon.classList.add(sunIcon);
        } else {
            themeIcon.classList.remove(sunIcon);
            themeIcon.classList.add(moonIcon);
        }
    }

    themeToggleBtn.addEventListener('click', () => {
        let newTheme = htmlElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-bs-theme', newTheme);
        updateIcon(newTheme);
        
        localStorage.setItem('theme', newTheme);
    });

    
    const registrationForm = document.getElementById('registration-form');
    
    if (registrationForm) {
        
        const successModal = new bootstrap.Modal(document.getElementById('successModal'));

        registrationForm.addEventListener('submit', function (event) {
            event.preventDefault();
            event.stopPropagation();

            if (registrationForm.checkValidity()) {
                successModal.show();
                
                registrationForm.classList.remove('was-validated');
                registrationForm.reset();
            } else {
                registrationForm.classList.add('was-validated');
            }
        }, false);
    }
});
