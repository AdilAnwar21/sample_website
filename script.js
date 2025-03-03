// function disableScroll() {
//     // Get the current page scroll position in the vertical direction
//    scrollTop =
//        window.pageYOffset || document.documentElement.scrollTop;
        
        
// // Get the current page scroll position in the horizontal direction 

//  scrollLeft =
//    window.pageXOffset || document.documentElement.scrollLeft;
   
   
//   // if any scroll is attempted,
//  // set this to the previous value
//  window.onscroll = function() {
//   window.scrollTo(scrollLeft, scrollTop);
// };



// }

// disableScroll()

// function enableScroll() {
//      window.onscroll = function() {};
// }
// e.preventDefault();

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

// setTimeout(() => {
//     enableScroll();
// }, 4000);


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
    const site_container = document.querySelector('.site-content');
    if (container) {
        container.style.display = 'none'; 

    }
    if(site_container){
        site_container.style.display = 'block';
        site_container.style.zIndex = '0';
    }
}


gsap.to('.count', {
    opacity: 0,
    delay: 3.5,
    duration: 0.5,
    
});

gsap.registerPlugin(ScrollTrigger);

// GSAP animation for product cards
gsap.from(".product-card", {
  scrollTrigger: {
    trigger: ".product-card",       
    start: "top 80%",                 
    end: "bottom top",               
    scrub: 1,                        
    markers: false,                  
  },
  opacity: 0,                        
  scale: 0.8,                        
  duration: 1.5,                     
  ease: "power3.out",                
});


// gsap.from(".mainImg", {
//     opacity: 0,
//     scale: 0.8,
//     duration: 1.5,
//     ease: "power3.out",
//   });
  
//   gsap.from(".purpleBox", {
//     opacity: 0,
//     y: 50,
//     duration: 1.5,
//     ease: "power3.out",
//     delay: 0.5,
//   });

gsap.from(".headingText", {
    opacity: 0,
    scale: 0.8,
    duration: 1.5,
    ease: "power3.out",
  });


function toggleNav() {
    console.log('clicked')
    var navContent = document.querySelector('.nav-content');
    // var btnNav = document.getElementById('btn-nav');

    if (navContent) {
        
        navContent.classList.toggle('showNav');
        navContent.classList.toggle('hideNav');
        navContent.classList.remove('hidden');

       
    }
}


function hello(){
    console.log("kjndcjnwjiw")
}

gsap.from(".contact-form-container", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".contact-form-container",
        start: "top 80%", // Animation starts when 80% of the container enters the viewport
        toggleActions: "play none none reset", // Replay animation every time it's in view
    },
});

document.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    const homeSection = document.getElementById("home");

    // Check if the scroll position is past the home section
    const homeHeight = homeSection.offsetHeight;
    if (window.scrollY > homeHeight) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

gsap.from("#footer", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "power4.out",
    scrollTrigger: {
      trigger: "#footer",
      start: "top 90%", 
      toggleActions: "play none none reset", 
    },
  });

