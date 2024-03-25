// Document Elements
const styleMode = document.getElementById('style-mode');
const nav = document.getElementById("nav");

const navLinks = [
    document.getElementById("aGameNest"),
    document.getElementById("aTech"),
    document.getElementById("aCollin"),
    document.getElementById("aJulie"),
    document.getElementById("aJustina"),
    document.getElementById("aLuke")
]

const bodyDivs = [
    document.getElementById("bodyGameNest"),
    document.getElementById("bodyTech"),
    document.getElementById("bodyCollin"),
    document.getElementById("bodyJulie"),
    document.getElementById("bodyJustina"),
    document.getElementById("bodyLuke")
]


// Initializes non-first divs as invisible
for (i = 1; i < bodyDivs.length; i++) {
    bodyDivs[i].style.display = "none"
}


for (i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", toggleActiveBody);
}



function toggleActiveBody(event) {
    for (let i = 0; i < navLinks.length; i++) {
        if (navLinks[i] == event.currentTarget) {
            navLinks[i].className = "nav-link active";
            bodyDivs[i].style.display = "inline";
        }

        else {
            navLinks[i].className = "nav-link";
            bodyDivs[i].style.display = "none";
        }
     }
}


// Toggles light/dark mode
var isDark = true;              // default value - dark mode on
document.getElementById("btnLight").addEventListener("click", toggleLightMode);
document.addEventListener("keyup", function(event) {
    if (event.key === 'l' || event.key === 'Enter') {
        toggleLightMode();
    }
});

function toggleLightMode() {
    if (isDark) {               // switch to light mode
        styleMode.setAttribute('href', './style/light.css');
        nav.className = "navbar navbar-expand-sm navbar-custom navbar-light navbar-fixed-top";
        imgLightMode.src = './img/moon.png';
        document.getElementById("logo").src = './img/gamenest-light.png'
        isDark = false;
   
    } else {                    // switch to dark mode
        styleMode.setAttribute('href', './style/dark.css');
        nav.className = "navbar navbar-expand-sm navbar-custom navbar-dark navbar-fixed-top";
        imgLightMode.src = './img/sun.png';
        document.getElementById("logo").src = './img/gamenest-dark.png'
        isDark = true;
    }
}