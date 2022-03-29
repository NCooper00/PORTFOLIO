const submit = document.querySelector('.sendIdea');
const sunLoad = document.querySelector('.sunLoad');

submit.addEventListener('click', () => {
    var timeLeft = 2;
    const loadStatus = sunLoad.getAttribute('data-visible');
    if (loadStatus === "false") {
        sunLoad.setAttribute('data-visible', true);
        var timer = setInterval(function() {
            if (timeLeft < 0) {
                clearInterval(timer);
                sunLoad.setAttribute('data-visible', false);
            } else {
                timeLeft--;
            }
        }, 1000)
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

