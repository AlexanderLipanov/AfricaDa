
getWindowSize();

function getWindowSize() {
    var respEls = document.getElementsByName("response");

    respEls.forEach(e => {
        var c = e.className;
        console.log(c);

        var cs = c.split(" ");    
    });
    
};