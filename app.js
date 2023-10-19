// set up copyright footer date 
// set date
const date = document.querySelector('.date');
date.innerHTML = new Date().getFullYear();
// Header navbar
// close links
const navToggle = document.querySelector('.nav-toggle');
const linkContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    // manuall
    // linkContainer.classList.toggle("show-links");
    // Dynamic
    const containerHeight = linkContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if(containerHeight === 0){
        linkContainer.style.height = `${linksHeight}px`
    }else{
        linkContainer.style.height = 0;
    }
})
// Fixed Navbar
const navbar = document.querySelector("#nav")
const topLink = document.querySelector(".top-link")

window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
        navbar.classList.add("fixed-nav")
    }else{
        navbar.classList.remove("fixed-nav")
    }
    if(scrollHeight > 500){
        topLink.classList.add
    }
})