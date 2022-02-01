

// Navbar on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    var barraFixed = document.getElementById("barra");

    if (prevScrollpos > currentScrollPos) {
        barraFixed.style.top = "0";
        barraFixed.style.background = "#faf8f8";
        barraFixed.classList.add('fixed')

    } else {
        barraFixed.style.top = "-54vh";
    }
    if (currentScrollPos >= 5) {
        barraFixed.style.background = "#faf8f8";

    } else {
  
        barraFixed.classList.remove('fixed')


    }
    prevScrollpos = currentScrollPos;
}

// Mobile menu
var menu = document.querySelector('.navigation-links');
var menuBtn = document.querySelectorAll(".open-btn");

menuBtn.forEach(menuBtn => menuBtn.addEventListener('click', () => {
     menu.classList.toggle('opened');
     menuBtn.classList.toggle('opened');
}));

var menuLink = document.querySelectorAll(".nav_links li");
menuLink.forEach(menuLink => menuLink.addEventListener('click', () => {
    menu.classList.toggle('opened');
}));


    const enlaces = document.querySelectorAll('.enlace a');

    enlaces.forEach(function (enlace) {
        enlace.addEventListener('click', function (e) {
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);

            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });






// Observer


const faders = document.querySelectorAll('.fade-in');


const appearOptions = {
    root: null,
    trashold: 0.5,
    rootMargin: "0px 0px -333px 0px"
};



const appearOnScroll = new IntersectionObserver(
    function (entries, appearOnScroll) {

        entries.forEach(entry => {

            if (!entry.isIntersecting) {
                entry.target.classList.remove("appear");
                return true;

            } else {
                entry.target.classList.add("appear");

                appearOnScroll.unobserve(entry.target);

            }
        });
    },
    appearOptions);
faders.forEach(fader => {
    appearOnScroll.observe(fader);
});



