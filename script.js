const submit = document.querySelector('.sendIdea');
const sunLoad = document.querySelector('.sunLoad');
const success = document.querySelector('.success');

const CName = document.getElementById('clientName');
const CEmail = document.getElementById('clientEmail');
const CIdea = document.getElementById('clientIdea');

submit.addEventListener('click', (event) => {
    if (CName.textContent && CEmail.textContent && CIdea.textContent) {
       var timeLeft = 2;
        const loadStatus = sunLoad.getAttribute('data-visible');
        console.log();
        if (loadStatus === "false") {
            sunLoad.setAttribute('data-visible', true);
            success.style.opacity = "100%"
            var timer = setInterval(function() {
                if (timeLeft < 0) {
                    clearInterval(timer);
                    sunLoad.setAttribute('data-visible', false);
                    success.style.opacity = "0"
                } else {
                    timeLeft--;
                }
            }, 1000)
        } 
    } else {
        return;
    }
    
})

const previous = document.querySelector('.previous');
const next = document.querySelector('.next');

const website = document.querySelectorAll('.website');
const siteDesc = document.querySelectorAll('.siteDesc');
const carousel = document.querySelector('.carousel');
const siteContainer = document.querySelector('.siteContainer');
carousel.style.width = `${website.length}00%`;
siteContainer.style.width = `${website.length}00%`;
var currentSite = 0;

previous.addEventListener('click', () => {
   var webNUM = website.length;
    if (currentSite === 0) {
        currentSite = webNUM-1;
    } else {
        currentSite--;
    }
    for (i=0; i<webNUM; i++) {
        website[i].style.left = `-${currentSite}00%`
    }
    for (e=0; e<webNUM; e++) {
        siteDesc[e].style.left = `-${currentSite}00%`
    }
})

next.addEventListener('click', () => {
    var webNUM = website.length;
    if (currentSite === webNUM-1) {
        currentSite = 0;
    } else {
        currentSite++;
    }
    for (i=0; i<webNUM; i++) {
        website[i].style.left = `-${currentSite}00%`
    }
    for (e=0; e<webNUM; e++) {
        siteDesc[e].style.left = `-${currentSite}00%`
    }
 })

const dark = document.querySelector('.DARK');
const light = document.querySelector('.LIGHT');
const LD = document.querySelector('.lightDark');

const root = document.documentElement;

LD.addEventListener('click', () => {
    var LDStat = LD.getAttribute('aria-enabled');
    if (LDStat === "false") {
        LD.setAttribute('aria-enabled', true)
        root.style.setProperty('--main-background', "rgb(225, 225, 225)")
        root.style.setProperty('--main-font-color', "rgb(24, 24, 24)")
        root.style.setProperty('--nav-color', "rgba(225, 225, 225, 0.90)")
        root.style.setProperty('--main-icon-color', "brightness(0)")
    } else {
        LD.setAttribute('aria-enabled', false)
        root.style.setProperty('--main-background', "black")
        root.style.setProperty('--main-font-color', "white")
        root.style.setProperty('--nav-color', "rgba(0, 0, 0, 0.90)")
        root.style.setProperty('--main-icon-color', "brightness(1)")
    }
}) 