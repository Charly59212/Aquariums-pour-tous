/*--------------------Caroussel---------------------------*/

// Ensures the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Select the main container of the carousel
  const carousel = document.querySelector('.carousel-track');
  const items = document.querySelectorAll('.carousel-item');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const itemWidth = items[0].getBoundingClientRect().width; // Get the width of a single carousel item
  let currentIndex = 0; // Initialize the current index of the carousel
  let autoScrollInterval; // Variable to hold the interval ID for auto-scrolling

  // Clone the carousel items to allow infinite scrolling
  items.forEach(item => {
      const clone = item.cloneNode(true); // Clone each carousel item
      carousel.appendChild(clone); // Append the cloned item to the carousel
  });

  // Updates the position of the carousel based on the current index
  function updateCarousel() {
      const moveAmount = currentIndex * itemWidth; // Calculate the amount to move the carousel
      carousel.style.transition = 'transform 1s ease'; // Set the transition for smooth scrolling
      carousel.style.transform = `translateX(-${moveAmount}px)`; // Move the carousel

      // Handle infinite scroll
      if (currentIndex >= items.length) { // If the current index exceeds the number of items
          setTimeout(() => {
              carousel.style.transition = 'none'; // Disable transition for the reset
              currentIndex = 0; // Reset the index to the start
              carousel.style.transform = `translateX(0)`; // Move the carousel back to the start
          }, 1500); // Wait before resetting, should match the CSS transition duration
      } else if (currentIndex < 0) { // If the current index is less than 0 (scrolling backwards past the first item)
          setTimeout(() => {
              carousel.style.transition = 'none'; // Disable transition for the reset
              currentIndex = items.length - 1; // Set index to the last item
              carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`; // Move the carousel to the last item
          }, 500); // Wait before resetting
      }
  }

  // Starts the auto-scroll at a fixed interval
  function startAutoScroll() {
      autoScrollInterval = setInterval(() => {
          currentIndex++; // Move to the next item
          updateCarousel(); // Update the carousel position
      }, 3000); // Interval duration adjust as 3 seconds
  }

  // Stops the auto-scroll
  function stopAutoScroll() {
      clearInterval(autoScrollInterval); // Clear the interval to stop auto-scrolling
  }

  // Handle clicks on the navigation buttons
  prevButton.addEventListener('click', () => {
      currentIndex--; // Move to the previous item
      updateCarousel(); // Update the carousel position
  });

  nextButton.addEventListener('click', () => {
      currentIndex++; // Move to the next item
      updateCarousel(); // Update the carousel position
  });

  // Start the auto-scroll functionality
  startAutoScroll();

  // Handle pausing and resuming auto-scroll on hover
  document.querySelector('.carousel-wrapper').addEventListener('mouseover', stopAutoScroll); // Stop auto-scroll on mouseover
  document.querySelector('.carousel-wrapper').addEventListener('mouseleave', startAutoScroll); // Restart auto-scroll on mouseleave
});



/*-------------------------Confirm send message-----------------------*/

// Confirm message comment as sent
document.addEventListener('DOMContentLoaded', function() {
    // Select the comment form element by its ID
    const commentForm = document.getElementById('commentForm');
    // Select the confirmation message using jQuery
    const commentConfirmationMessage = $('#commentConfirmationMessage');

// Script for the confirmation message
    if (commentForm) { // Check if the comment form exists
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent the form from submitting

            // Show the confirmation message with a fade-in effect
            commentConfirmationMessage.fadeIn(1500)  // Fade in over 1.5 seconds
                                      .delay(2000)   // Keep the message visible for 2 seconds
                                      .fadeOut(1000, function() { // Fade out over 1 second
                                          // Scroll to the top of the page smoothly after the message fades out
                                          window.scrollTo({ top: 0, behavior: 'smooth' });
                                      });

            // Reset the form fields
            commentForm.reset();
        });
    }
});
