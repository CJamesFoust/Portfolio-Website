const tl = gsap.timeline({ defaults: { ease: "power1.out" } } )
const faders = document.querySelectorAll('.fade-in');
const fadersTwo = document.querySelectorAll('.fade-in-2');
const photoFader = document.getElementById('self');

const windowSize = window.innerWidth;

if(windowSize >= 768) {
    tl.to(".text", { x: "0%", duration: 1.5, stagger: 0.25 });
    tl.to(".slider", { x: "-100%", duration: 1.5, delay: 1 });
    tl.to(".intro", { x: "-100%", duration: 1}, "-=1.5");
    tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1});
    tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1}, "-=1.5");
    tl.fromTo(".mid-text", { opacity: 0 }, { opacity: 1, duration: 1}, "-=1");
    tl.fromTo(".arrow", { opacity: 0 }, { opacity: 1, duration: 1}, "-=.5");
} else {
    tl.to(".slider", { x: "-200%", duration: 1.5, delay: 0 });
}

const aboutY = document.getElementById('about').offsetTop;
const portfolioY = document.getElementById('portfolio').offsetTop;
const contactY = document.getElementById('contact').offsetTop;
const aboutNav = document.getElementById('about-nav')
const homeNav = document.getElementById('home-nav')
const portfolioNav = document.getElementById('portfolio-nav')
const contactNav = document.getElementById('contact-nav')
const navElements = document.getElementsByClassName('nav-element')

const cLogWindow = () => {
    if(window.pageYOffset < aboutY) {
        for(element of navElements) {
            element.classList.remove('active');
        }
        homeNav.classList.add("active");
    }
    
    else if(window.pageYOffset >= (aboutY) && window.pageYOffset < portfolioY) {
        for(element of navElements) {
            element.classList.remove('active');
        }
        aboutNav.classList.add("active");

    }

    else if(window.pageYOffset >= (portfolioY) && window.pageYOffset < contactY) {
        for(element of navElements) {
            element.classList.remove('active');
        }
        portfolioNav.classList.add("active");

    }

    else if(window.pageYOffset >= (contactY)) {
        for(element of navElements) {
            element.classList.remove('active');
        }
        contactNav.classList.add("active");

    }
}

document.addEventListener('scroll', cLogWindow);

var firstLoaded = false;

const appearOptions = {
    root: null,
    threshold: 1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver(entries => {
    let timer = 500
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target)
            }, timer)
            timer += 500;
        } else {
            return;
        }
    });
}, appearOptions);

faders.forEach(fader => {
    observer.observe(fader);
})
function openNavBar() {
    var x = document.getElementById('topNav');
    if (x.style.display === "flex") {
        x.style.display = "none";
        x.style.backgroundColor = "none";
    } else {
        x.style.display = "flex"
        x.style.backgroundColor = "rgba(148, 160, 180, .8)";
    }
}