

// Navbar on scroll


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







// function getSubmitData, send the data to the email server

const getSubmitData = () => {
    event.preventDefault()
    let name = document.getElementById('form-name').value;
    let number = document.getElementById('form-number').value;
    let to = document.getElementById('form-mail').value;
    let subject = document.getElementById('form-asunto').value;
    let body = document.getElementById('form-mensaje').value;

    //show the loading animation
    document.getElementById('loading').style.display = 'block';

    let url = "https://go-mails.herokuapp.com/email";
    let data = {
        name,
        number,
        to,
        subject,
        body,
    };

    

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.status === 'ok') {
                document.getElementById('form-name').value = '';
                document.getElementById('form-number').value = '';
                document.getElementById('form-mail').value = '';
                document.getElementById('form-asunto').value = '';
                document.getElementById('form-mensaje').value = '';
                document.getElementById('loading').style.display = 'none';
                document.getElementById('my-form-status').innerHTML = 'Mensaje enviado correctamente';
                 document.getElementById('my-form-status').style.background.color = '#008000';
                 document.getElementById('my-form-status').style.border.radius = '3px';
                 document.getElementById('my-form-status').style.maxWidth = '450px';
            } else {
     
                 document.getElementById('my-form-status').style.color = '#008000';
                 document.getElementById('my-form-status').style.border.radius = '3px';
                 document.getElementById('my-form-status').style.padding = '1em 2em';
                document.getElementById('my-form-status').innerHTML = 'Ooops.. ocurrio un error estamos trabajando en ello';
            }
        });

};