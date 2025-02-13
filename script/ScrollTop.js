
  var mybutton = document.getElementById("backToTopBtn");

    // Quand l'utilisateur clique sur le bouton, défiler jusqu'en haut du document
 function topFunction() {
     document.body.scrollTop = 0; // Pour Safari
     document.documentElement.scrollTop = 0; // Pour Chrome, Firefox, IE et Opera
 }

