
const navLinks = document.querySelectorAll('.nav-link');

// Function to set active link
function setActiveLink(event) {
  navLinks.forEach(link => link.classList.remove('active-link'));
  event.target.classList.add('active-link');
}

// Add click event listeners to all links
navLinks.forEach(link => {
  link.addEventListener('click', setActiveLink);
});