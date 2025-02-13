
          document.addEventListener('DOMContentLoaded', () => {
            const navbar = document.querySelector('[data-navbar-soft-on-scroll]');
        
            const windowHeight = window.innerHeight;
        const handleAlpha = () => {
          const scrollTop = window.scrollY;
          const isMobile = window.innerWidth < 768;
          let alpha =  (scrollTop / windowHeight) * 2;
          alpha >= 1 && (alpha = 1);
          
          if (isMobile && scrollTop === 0) {
              navbar.style.backgroundColor = `rgba(128, 90, 213, 1)`; 
          } else {
            navbar.style.backgroundColor = `rgba(49, 60, 89, ${alpha})`;
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
      
            // Submenu handling
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
      
            // Active link handling
            const navLinks = document.querySelectorAll('.nav-link');
            const sections = document.querySelectorAll('section');
      
            const setActiveLink = () => {
              let index = sections.length;
      
              while (--index && window.scrollY  +50 < sections[index].offsetTop) {}
      
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
 