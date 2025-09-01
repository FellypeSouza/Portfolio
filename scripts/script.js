const navButton = document.getElementById('navButton');
const header = document.querySelector('.header');

gsap.fromTo(header, 
    {opacity: 0, y: -50}, 
    {opacity: 1, y: 0, duration: 1.5, ease: "power2.out"}
);



gsap.to(navButton, {
    scale: 1.1,
    duration: 1,
    yoyo: true,
    repeat: -1,
})