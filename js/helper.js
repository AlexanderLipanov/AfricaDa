"use strict"


const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    },
};

if(isMobile.any()) {
    document.body.classList.add("touch");

    const elems = document.getElementsByName("scroll-button");    

    if(elems.length > 0) {
        elems.forEach(el => {
            el.addEventListener("click", function(e) {
                el.classList.toggle("active");
            });
        });       
    }
} else {
    document.body.classList.add("pc");
}

const links = document.getElementsByName("scroll-button");

if(links.length > 0)
{
    links.forEach(l => {
        l.addEventListener("click", onMenuClick);
    })
}

function animMenuButton() {
    let b = document.getElementById("burger-button");

    b.classList.toggle("close-anim-burger-btn");

    let lines = document.getElementsByName("menu-animation-btn");

    lines.forEach(l => {
        l.classList.toggle("close-anim")
    });
}

function toggleBurger() {

    animMenuButton();
   
    let m = document.getElementById("burger-menu");

    m.classList.toggle("active-menu");
}

function closeBurger()
{
    let m = document.getElementById("burger-menu");

    if(m.classList.contains("active-menu")) {
        m.classList.toggle("active-menu");
    }
}

let currentScroll = 0;

function toggleActiveLinks() {   
        
        let links = document.getElementsByName("scroll-button");

        links.forEach(l => {            
            if(l.classList.contains("active-link")) {
                l.classList.remove("active-link");
            }
        });
}

 // document.getElementById("page").addEventListener("scroll", toggleActiveLinks);

    function onMenuClick(e) {

        const menuLink = e.target;         
        var d = document.getElementById("page").scrollTop;
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        let t = gotoBlock.getBoundingClientRect().top;
        let b = document.querySelector("toolbar");
        let h = b === undefined || b === null ? 74 : b.offsetHeight;
        const gotoBlockValue = d + t + scrollY - h - 20;
        currentScroll = gotoBlockValue;
        document.getElementById("page").scrollTo({
            left: null,
            top: gotoBlockValue,
            behavior: "smooth",
        });
        e.preventDefault();  
        
        closeBurger(); 
        toggleActiveLinks();
        menuLink.classList.toggle("active-link");
        animMenuButton();
    }
