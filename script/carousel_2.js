
        document.addEventListener('DOMContentLoaded', function() {
            const texts = document.querySelectorAll('#carousel-texts .carousel-item');
            const images = document.querySelectorAll('#carousel-images .carousel-item');
            const controls = document.querySelectorAll('.carousel-control');
            let currentIndex = 0;
            let interval;  

            const updateCarousel = (index) => {
                texts.forEach((text, i) => {
                    text.classList.toggle('active', i === index);
                });
                images.forEach((image, i) => {
                    image.classList.toggle('active', i === index);
                });
                controls.forEach((control, i) => {
                    control.src = i === index ? "../assets/images/Ellipse_jaune.png" : "../assets/images/Ellipse_grise.png"; // Change the source to indicate the active item
                });
                currentIndex = index;
            };

            const startAutoScroll = () => {
                interval = setInterval(() => {
                    let nextIndex = (currentIndex + 1) % texts.length;
                    updateCarousel(nextIndex);
                }, 3000); // Change slide every 3 seconds
            };

            controls.forEach((control, index) => {
                control.addEventListener('click', () => {
                    clearInterval(interval); // Stop auto scroll on manual control
                    updateCarousel(index);
                    startAutoScroll(); // Restart auto scroll after manual control
                });
            });

            startAutoScroll();
        });
