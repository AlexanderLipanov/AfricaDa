"use strict"

initPage();

function goToElement(e) {

    const menuLink = e.target; 

    console.log("go to");

    window.scroll({
        left: 0,
        top: 500,        
        behavior: "smooth",
    });
}

function initPage() {

    var elems = document.getElementsByName("scroll-button");    

    console.log(`elems count: ${elems.length}`);

    if(elems !== null || elems !== undefined) {
        elems.forEach(el => {
            el.onclick = goToElement;            
        });
    }
}

