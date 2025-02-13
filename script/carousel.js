        // Script pour le défilement automatique
        document.addEventListener('DOMContentLoaded', function() {
            const carouselContainer = document.querySelector('.carousel-container');
            let scrollAmount = 0;
            let scrollInterval = setInterval(() => {
                const itemWidth = carouselContainer.querySelector('.flex-none').clientWidth;
                const itemsPerScreen = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 3 : 4;
                scrollAmount += itemWidth;
                if (scrollAmount >= carouselContainer.scrollWidth - itemWidth * itemsPerScreen) {
                    scrollAmount = 0;
                }
                carouselContainer.scrollTo({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            }, 3000); // Défilement tous les 3 secondes
        });