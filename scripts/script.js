const navButton = document.getElementById('navButton');
const nav = document.querySelector('#nav');
const header = document.querySelector('.header');
const aboutMe = document.querySelector('.aboutMe');
const services = document.querySelector('.services');
const jobsCompleted = document.querySelector('.jobsCompleted');
const contact = document.querySelector('.contact');

// Animações com GSAP

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

// Scroll suave ao clicar nos links de navegação
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            gsap.to(window, { duration: 1, scrollTo: targetElement });
        }
    });
});

/* Animação de Entrada da Seção Nav */
gsap.from(nav, {
    opacity: 0,
    y: -50,
    duration: 1,
    scrollTrigger: {
        trigger: nav,
        start: "top 80%",
        toggleActions: "play none none reverse",
    }
});


/* Animação de Entrada da Seção Sobre Mim */
gsap.from(aboutMe, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: aboutMe,
        start: "top 80%",
        toggleActions: "play none none reverse",
    }
});

/* Animação de Entrada da Seção Serviços Oferecidos */
gsap.from(services, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: services,
        start: "top 80%",
        toggleActions: "play none none reverse",
    }
})

/* Animação de Entrada da Seção Serviços Concluídos */
gsap.from(jobsCompleted, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: jobsCompleted,
        start: "top 80%",
        toggleActions: "play none none reverse",
    }
})

/* Animação de Entrada da Seção Contato */
gsap.from(contact, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: contact,
        start: "top 80%",
        toggleActions: "play none none reverse",
    }
})

/* Animação constante do NavButton */
gsap.to(navButton, {
    scale: 1.1,
    duration: 1,
    yoyo: true,
    repeat: -1,
})

/* Animação de entrada do Header */
gsap.fromTo(header,
    { opacity: 0, y: -50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
);


