// set up copyright footer date 
// set date
const date = document.querySelector('.date');
date.innerHTML = new Date().getFullYear();
// Header navbar
// close links
const navToggle = document.querySelector('.nav-toggle');
const linkContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

const containerHeight = linkContainer.getBoundingClientRect().height;
const linksHeight = links.getBoundingClientRect().height;
navToggle.addEventListener('click', function(){
    // manuall
    // linkContainer.classList.toggle("show-links");
    // Dynamic
    if(containerHeight === 0){
        linkContainer.style.height = `${linksHeight}px`
    }else{
        linkContainer.style.height = 0;
    }
})
// Fixed Navbar
const navbar = document.querySelector("#nav")
const topLink = document.querySelector(".top-link")
const scrollHeight = window.pageYOffset;
const navHeight = navbar.getBoundingClientRect().height;

window.addEventListener("scroll", function(){
    if(scrollHeight > navHeight){
        navbar.classList.add("fixed-nav")
    }else{
        navbar.classList.remove("fixed-nav")
    }
    if(scrollHeight > 500){
        topLink.classList.add('show-link');
    }else{
        topLink.classList.remove('show-link');    
    }
})
// smooth Scroll
// select Links 

const scrollLinks = document.querySelectorAll(".scroll-link")
const fixedNav = navbar.classList.contains("fixed-nav")
scrollLinks.forEach(function (link){
    link.addEventListener('click', function(e){
        e.preventDefault(); 
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        let position = element.offsetTop - navHeight;
        if(!fixedNav){
            position = position - navHeight
        }
        if(navHeight > 82){
            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });
        linkContainer.style.height = 0;
    })
})
