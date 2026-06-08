const menuIcon = document.querySelector(".menu-icon");

const menu = document.querySelector("nav ul");


menuIcon.addEventListener("click",()=>{

menu.classList.toggle("active");

});

window.addEventListener("scroll",()=>{

const header = document.querySelector("header");

header.classList.toggle("scrolled",window.scrollY > 50);

});
const links = document.querySelectorAll("nav ul a");

links.forEach(link => {

    link.addEventListener("click",()=>{

        menu.classList.remove("active");

    });

});

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach(el=>observer.observe(el));

const scrollTopBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollTopBtn.style.display = "flex";

    } else {

        scrollTopBtn.style.display = "none";

    }


});