
// Navbar on scroll

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        var barraFixed = document.getElementById("barra");

        if (currentScrollPos >= 600) {


            barraFixed.classList.add('fixed')
            barraFixed.style.top = "0";

        } else {
            barraFixed.classList.remove('fixed')
        }


    }



    const enlaces = document.querySelectorAll('.nav-links li a');

    enlaces.forEach(function (enlace) {
        enlace.addEventListener('click', function (e) {
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);

            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });



// Mobile hamburguer

var menu = document.querySelector('.site-navigation');
var menuBtn = document.querySelector(".bars");

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('opened');
    menuBtn.classList.toggle('opened');
});
var menuLink = document.querySelectorAll(".nav-links li");
menuLink.forEach(menuLink => menuLink.addEventListener('click', () => {
    menu.classList.toggle('opened');
    menuBtn.classList.toggle('opened');
}));


// Observer


const faders = document.querySelectorAll('.fade-in');


const appearOptions = {
    root: null,
    trashold: 0.5,
    rootMargin: "0px 0px -250px 0px"
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



