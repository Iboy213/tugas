document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.style.opacity = 0; // Awalnya tidak terlihat
        section.style.transform = 'translateY(20px)'; // Geser ke bawah
    });

    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});
