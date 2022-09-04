
const navbar = document.querySelector('nav.navbar');

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        navbar.style.backgroundColor = '#002841';
        navbar.style.paddingTop = "10px"
        navbar.style.height = "120px"

    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.paddingTop = "50px"
        navbar.style.height = "160px"

    }
});


