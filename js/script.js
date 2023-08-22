  let menuIcon = document.querySelector('#menu-icon');
 let navbar = document.querySelector('.navbar');

 menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
 };



 let sections = document.querySelectorAll('section');
 let navLinks = document.querySelectorAll('header nav a');

 window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
 };

ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay:200
 });



 ScrollReveal().reveal('.home-content , .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img , .portfolio-box , .skill,  .contact form', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1 , .about-img ', { origin: 'left' });
 ScrollReveal().reveal('.home-content p , .about-content ', { origin: 'right' });


 const typed = new Typed('.multiple-text', {
    strings: ['Backend Developer', 'Django Developer', 'Data Analyst'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
 });

 function scrollToHome() {
  const homeSection = document.getElementById("home");

  homeSection.scrollIntoView({ behavior: "smooth" });
 }


function animateProgressBar(progressBar) {
  // Get the progress bar element and its width
  const progressBarEl = progressBar.querySelector('.progress-bar');
  const progressBarWidth = progressBarEl.getAttribute('data-width');

  // Animate the progress bar width
  progressBarEl.style.width = `${progressBarWidth}%`;

  // Remove the animation class to prevent it from being triggered again
  progressBarEl.classList.remove('animate__animated');
}

// Define a function to handle the scroll event
function handleScroll() {
  // Get the progress bars and their offsets
  const progressBars = document.querySelectorAll('.skills');
  const progressBarsOffsets = Array.from(progressBars).map((progressBar) => {
    return {
      el: progressBar,
      offset: progressBar.offsetTop,
    };
  });

  // Get the current scroll position
  const currentScrollPos = window.pageYOffset;

  // Loop through the progress bars and check if they should be animated
  progressBarsOffsets.forEach((progressBarOffset) => {
    const { el, offset } = progressBarOffset;

    // If the progress bar is in the viewport and has not been animated yet, animate it
    if (currentScrollPos + window.innerHeight > offset && !el.classList.contains('animated')) {
      animateProgressBar(el);
      el.classList.add('animated');
    }
  });
}

// Attach the scroll event listener to the window
window.addEventListener('scroll', handleScroll);

const scrollProgress = document.getElementById('scroll-progress');
const height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;
  scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
});