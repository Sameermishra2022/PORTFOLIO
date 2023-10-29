let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


let section = document.querySelectorAll('section');
let navlink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height)
        {
            navlink.forEach(link => {
                link.classList.remove('action');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');
header.classList.toogle('sticky', window.scrollY > 100);

menuicon.classList.remove('bx-x');
navbar.classList.remove('active');
};

ScrollReveal({
    // reset: true,
   distance: '80px',
duration:2000,
delay:200
});

ScrollReveal().reveal('.home-contact, .heading', { origin:'top' });
ScrollReveal().reveal('.home-img, .Experience-container, .portfolio-box, contact form', { origin:'bottom' });
ScrollReveal().reveal('.home-contactt h1, .about-img', { origin:'left' });
ScrollReveal().reveal('.home-contact p, .about-contact', { origin:'right' });

const typed = new Typed('.multiple-text',{
    strings:['Frontend Developer','Blogger','Photographer'],
    typeSpeed:100,
    backSpeed:100,
    DelaySpeed:1000,
    loop:true
})