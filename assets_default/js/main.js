window.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".wba-promo-container");
    const cards = Array.from(container.querySelectorAll(".wba-promo-card"));

    // Shuffle the cards
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    // Re-append in new order
    cards.forEach(card => container.appendChild(card));
  });

  document.addEventListener('DOMContentLoaded', function() {
    try {
        const swiper = new Swiper('.swiper-container', {
            loop: true,
  speed: 3000, // slow slide transition
  autoplay: {
    delay: 0,  // no pause between slides
    disableOnInteraction: false, // continue after user swipe
  },
  slidesPerView: 'auto',
  spaceBetween: 20,
  freeMode: true,
  grabCursor: true,
            
            // Responsive breakpoints
            breakpoints: {
                320: {
                    slidesPerView: 1.5,
                    spaceBetween: 10
                },
                480: {
                  slidesPerView: 1.5,
                  spaceBetween: 30
                },
                640: {
                    slidesPerView: 1.5,
                    spaceBetween: 20
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            },
            effect: 'coverflow',
            
            // Error handling
            on: {
                init: function() {
                    console.log('Swiper initialized successfully');
                },
                error: function(swiper, error) {
                    console.error('Swiper error:', error);
                }
            }
        });

        // Optional: Pause on hover
        const swiperContainer = document.querySelector('.swiper-container');
        
        swiperContainer.addEventListener('mouseenter', function() {
            swiper.autoplay.stop();
        });
        
        swiperContainer.addEventListener('mouseleave', function() {
            swiper.autoplay.start();
        });
        
    } catch (error) {
        console.error('Failed to initialize Swiper:', error);
        // Fallback behavior or user notification
        const container = document.querySelector('.swiper-container');
        if (container) {
            container.innerHTML = '<p>Slider initialization failed. Please refresh the page.</p>';
        }
    }
});
