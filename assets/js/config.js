
//Script for navbar
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('[data-navbar-soft-on-scroll]');
  const SUBmenu= document.getElementById('submenu');
  const windowHeight = window.innerHeight;
const handleAlpha = () => {
const scrollTop = window.scrollY;
const isMobile = window.innerWidth < 768;
let alpha =  (scrollTop / windowHeight) * 2;
alpha >= 1 && (alpha = 1);

if (isMobile && scrollTop === 0) {
    navbar.style.backgroundColor = '#6B21A8'; 
 
} else {
  navbar.style.backgroundColor = `rgba(100, 60, 89, ${alpha})`;
  SUBmenu.style.backgroundColor = `rgba(100, 60, 89, ${alpha})`;
}
};
handleAlpha();
document.addEventListener('scroll', handleAlpha);
  const menuButton = document.getElementById('menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
    menuButton.setAttribute('aria-expanded', !expanded);
    mobileMenu.classList.toggle('navbar-hidden');
  });
  const navbarNav = document.querySelector('[data-navbar-nav]');
  navbarNav.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      menuButton.setAttribute('aria-expanded', false);
      mobileMenu.classList.add('navbar-hidden');
    }
  });

  // Script for Submenu handling
  const supportMenu = document.getElementById('support-menu');
  const submenu = document.getElementById('submenu');

  supportMenu.addEventListener('mouseenter', () => {
    submenu.classList.remove('submenu-hidden');
    submenu.classList.add('submenu-visible');
  });

  supportMenu.addEventListener('mouseleave', () => {
    submenu.classList.remove('submenu-visible');
    submenu.classList.add('submenu-hidden');
  });

  submenu.addEventListener('mouseenter', () => {
    submenu.classList.remove('submenu-hidden');
    submenu.classList.add('submenu-visible');
  });

  submenu.addEventListener('mouseleave', () => {
    submenu.classList.remove('submenu-visible');
    submenu.classList.add('submenu-hidden');
  });

  // Script for Active link handling
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  const setActiveLink = () => {
    let index = sections.length;

    while (--index && window.scrollY  - 50< sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove('active'));
    navLinks[index].classList.add('active');
  };
  window.addEventListener('load', () => {
    document.querySelector('a[href="#home"]').click();
  });
  window.addEventListener('scroll', setActiveLink);
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth',
      });
      navLinks.forEach((link) => link.classList.remove('active'));
      link.classList.add('active');
    });
  });
});

//Script for testimonial 
  const container = document.getElementById('testimonial-container');
  const testimonials = container.children;
  let currentIndex = 0;

  function scrollTestimonials() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    container.style.transform = `translateY(-${currentIndex * 100}%)`;
  }

  setInterval(scrollTestimonials, 3000); // Change every 3 seconds
  
// Script for play video

document.addEventListener('DOMContentLoaded', function () {               
  const video = document.querySelector('[data-video-player]');
  const pauseIcon = document.querySelector('[data-pause-icon]');
  const playIcon = document.querySelector('[data-play-icon]');

  function showPlayIcon() {
    pauseIcon.classList.remove('hidden');
    playIcon.classList.add('hidden');
  }

  function showPauseIcon() {
    playIcon.classList.remove('hidden');
    pauseIcon.classList.add('hidden');
  }

  playIcon.addEventListener('click', function () {
    if (video.paused) {
      video.play();
      showPauseIcon();
    } else {
      video.pause();
      showPlayIcon();
    }
  });

  pauseIcon.addEventListener('click', function () {
    if (video.paused) {
      video.play();
      showPauseIcon();
    } else {
      video.pause();
      showPlayIcon();
    }
  });

  video.addEventListener('play', showPauseIcon);
  video.addEventListener('pause', showPlayIcon);
  video.addEventListener('ended', showPlayIcon);

  // Initialize the correct icon state
  if (video.paused) {
    showPlayIcon();
  } else {
    showPauseIcon();
  }
});











               








    // Obtenez le bouton
    var mybutton = document.getElementById("backToTopBtn");

    // Quand l'utilisateur fait défiler vers le bas 20px depuis le haut du document, affichez le bouton
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    // Quand l'utilisateur clique sur le bouton, défiler jusqu'en haut du document en douceur
    function topFunction() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
    }

