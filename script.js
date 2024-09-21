function startLoader() {
    let counterElement = document.querySelector(".count p");
    let currentValue = 0;

    function updateCounter() {
        if (currentValue < 100) {
            let increment = Math.floor(Math.random() * 10) + 1;
            currentValue = Math.min(currentValue + increment, 100);
            counterElement.textContent = currentValue;

            let delay = Math.floor(Math.random() * 200) + 25;
            setTimeout(updateCounter, delay);
        }
    }

    updateCounter();
}

startLoader();

gsap.to('.count', {
    opacity: 0,
    delay: 3.5,
    duration: 0.5
});

let textWrapper = document.querySelector(".ml16");
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({
    'loop': false
})
    .add({
        targets: '.ml16 .letter',
        translateY: [-100, 0],
        easing: "easeOutExpo",
        duration: 1500,
        delay: (el, i) => 30 * i
    })
    .add({
        targets: '.ml16 .letter',
        translateY: [0, 100],
        easing: "easeOutExpo",
        duration: 3000,
        delay: (el, i) => 2000 + 30 * i
    });

gsap.to(".preloader", {
    scale: 0.5,
    ease: 'power4.inOut',
    duration: 2,
    delay: 3
});

gsap.to(".loader", {
    height: 0,
    ease: 'power4.inOut',
    duration: 1.5,
    delay: 3.75
});

gsap.to(".loader-bg", {
    height: 0,
    ease: 'power4.inOut',
    duration: 1.5,
    delay: 4
});

gsap.to(".loader-2", {
    clipPath: "polygon(0% 0%,100% 0%,100% 0%,0% 0%)",
    ease: 'power4.inOut',
    duration: 1.5,
    delay: 3.5,
    onComplete: hidePreloader
});

gsap.from(".header h1", {
    y: 200,
    ease: 'power4.inOut',
    duration: 1.5,
    delay: 3.5,
    stagger: 0.05
});

gsap.to('.img', {
    ease: 'power4.inOut',
    duration: 1.5,
    delay: 4.5,
    stagger: 0.25
});

// Function to hide the preloader container after animations
function hidePreloader() {
    const container = document.querySelector('.container');
    if (container) {
        container.style.display = 'none'; // or use container.remove() to remove it from the DOM
    }
}

// Use GSAP's `onComplete` to call the hidePreloader function when animations are done
gsap.to('.count', {
    opacity: 0,
    delay: 3.5,
    duration: 0.5,
    
});

function toggleNav() {
    console.log('clicked')
    var navContent = document.querySelector('.nav-content');
    var btnNav = document.getElementById('btn-nav');

    if (btnNav && navContent) {
        // Toggle classes on nav content
        navContent.classList.toggle('showNav');
        navContent.classList.toggle('hideNav');
        navContent.classList.remove('hidden');

        // Toggle class on the button
        btnNav.classList.toggle('animated');
    }
}


function hello(){
    console.log("kjndcjnwjiw")
}
