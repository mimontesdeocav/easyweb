// Función para manejar las animaciones de scroll
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.scroll-reveal');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
            element.classList.add('active');
        }
    });
}

// Inicializar las animaciones de scroll
document.addEventListener('DOMContentLoaded', () => {
    handleScrollAnimations();
    window.addEventListener('scroll', handleScrollAnimations);
});

// Navbar transparente con scroll
function handleNavbarTransparency() {
    const navbar = document.querySelector('.navbar-glass');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    }
}

// Inicializar la transparencia del navbar
window.addEventListener('scroll', handleNavbarTransparency);

// Smooth scroll para los enlaces del navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
