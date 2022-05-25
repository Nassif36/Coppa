

// Navbar on scroll


// Mobile menu
var menu = document.querySelector('.navigation-links');
var menuBtn = document.querySelectorAll(".open-btn");

menuBtn.forEach(menuBtn => menuBtn.addEventListener('click', () => {
    menu.classList.toggle('opened');
    menuBtn.classList.toggle('opened');
}));

var menuLink = document.querySelectorAll(".navigation-links li");
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

let listElements = document.querySelectorAll('.list__button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', () => {

        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if (menu.clientHeight == "0") {
            height = menu.scrollHeight;

        }
        if (event.target != listElement) {
            console.log(listElement);

        }


        menu.style.height = `${height}px`;

    })
});

document.addEventListener('DOMContentLoaded', function () {


    const sections = document.querySelectorAll(".section");
    const menu_links = document.querySelectorAll(".navigation-links li");

    // functions to add and remove the active class from links as appropriate
    const makeActive = (link) => menu_links[link].classList.add("active");
    const removeActive = (link) => menu_links[link].classList.remove("active");
    const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));

    // change the active link a bit above the actual section
    // this way it will change as you're approaching the section rather
    // than waiting until the section has passed the top of the screen
    const sectionMargin = 200;

    // keep track of the currently active link
    // use this so as not to change the active link over and over
    // as the user scrolls but rather only change when it becomes
    // necessary because the user is in a new section of the page
    let currentActive = 0;

    // listen for scroll events
    window.addEventListener("scroll", () => {

        // check in reverse order so we find the last section
        // that's present - checking in non-reverse order would
        // report true for all sections up to and including
        // the section currently in view
        //
        // Data in play:
        // window.scrollY    - is the current vertical position of the window
        // sections          - is a list of the dom nodes of the sections of the page
        //                     [...sections] turns this into an array so we can
        //                     use array options like reverse() and findIndex()
        // section.offsetTop - is the vertical offset of the section from the top of the page
        // 
        // basically this lets us compare each section (by offsetTop) against the
        // viewport's current position (by window.scrollY) to figure out what section
        // the user is currently viewing
        const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin) - 1

        // only if the section has changed
        // remove active class from all menu links
        // and then apply it to the link for the current section
        if (current !== currentActive) {
            removeAllActive();
            currentActive = current;
            makeActive(current);
        }
    });
}, false);





// function getSubmitData, send the data to the email server



const getSubmitData = () => {
    event.preventDefault()
    let name = document.getElementById('form-name').value;
    let number = document.getElementById('form-number').value;
    let to = document.getElementById('form-mail').value;
    let subject = document.getElementById('form-asunto').value;
    let body = document.getElementById('form-mensaje').value;
    if(name.value <= 0) {
        alert('completa los campos')
    } else {
        
    }
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