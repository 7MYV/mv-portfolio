const burgerMenu = document.querySelector(".burger-menu")
const nav = document.querySelector("nav")

const navLinks = document.querySelectorAll(".nav-item")

burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active")
    nav.classList.toggle("active")
})


// close mobile-nav when clicked on nav-item
navLinks.forEach(link => {
    link.addEventListener("click", e => {
        nav.classList.remove("active")
    })
})

ScrollReveal().reveal('.img-container', {delay:200, scale:1.09, easing: "ease-out", duration: 600});
ScrollReveal().reveal('.about-content', {delay:300, scale:0.6, easing: "ease-out", duration: 600});
