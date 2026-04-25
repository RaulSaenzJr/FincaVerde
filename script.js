/* Age Gate */
(function () {
    const gate = document.getElementById('age-gate');

    if (sessionStorage.getItem('ageVerified')) {
        gate.classList.add('hidden');
        return;
    }

    document.body.style.overflow = 'hidden';

    document.getElementById('age-yes').addEventListener('click', () => {
        try { sessionStorage.setItem('ageVerified', '1'); } catch (_) {}
        gate.classList.add('hidden');
        document.body.style.overflow = '';
    });

    document.getElementById('age-no').addEventListener('click', () => {
        window.location.replace('https://www.google.com');
    });
})();

/* Mobile Menu */
(function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks  = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        hamburger.classList.toggle('active', isOpen);
        hamburger.setAttribute('aria-expanded', String(isOpen));
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    navLinks.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });
})();

/* Sticky Header Shadow */
(function () {
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
})();
