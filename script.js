document.addEventListener("DOMContentLoaded", () => {

    // ---- NAVBAR: efecto scroll ----
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        navbar.classList.toggle("scrolled", window.scrollY > 50);
    }, { passive: true });

    // ---- HAMBURGER: menú mobile ----
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");

    hamburger.addEventListener("click", () => {
        const isOpen = mobileMenu.classList.toggle("open");
        hamburger.classList.toggle("open", isOpen);
        hamburger.setAttribute("aria-expanded", String(isOpen));
    });

    // Cerrar menú al hacer click en un link
    mobileMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("open");
            hamburger.classList.remove("open");
            hamburger.setAttribute("aria-expanded", "false");
        });
    });

    // ---- REVEAL on scroll ----
    const revealEls = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealEls.forEach(el => revealObserver.observe(el));

    // ---- NAV LINK ACTIVO según sección visible ----
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");
                navLinks.forEach(link => {
                    const matches = link.getAttribute("href") === `#${id}`;
                    link.classList.toggle("active", matches);
                });
            }
        });
    }, { rootMargin: "-40% 0px -55% 0px" });

    sections.forEach(s => sectionObserver.observe(s));
});
