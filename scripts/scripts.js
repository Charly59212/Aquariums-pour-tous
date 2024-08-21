// ------------Hamburger Menu---------------

document.addEventListener('DOMContentLoaded', function() {
    // Select the hamburger menu toggle button and the navigation links container
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Toggle the 'open' class on the navigation links when the menu toggle button is clicked
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('open'); // Add or remove the 'open' class
    });

    // Ensure the navigation menu is closed if the window is resized to a width greater than 768px
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('open'); // Remove the 'open' class on larger screens
        }
    });
});



/*------------Back-to-Top Arrow---------------*/

// JavaScript to handle the appearance of the back-to-top arrow and smooth scrolling
document.addEventListener('DOMContentLoaded', function() {
    const backToTop = document.getElementById('backToTop');
    
    // Show the back-to-top arrow when the user scrolls down more than 100px
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) { // Show the arrow after scrolling 100px down
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none'; // Hide the arrow if less than 100px down
        }
    });

    // Smooth scroll to the top when the back-to-top arrow is clicked
    backToTop.addEventListener('click', function() {
        smoothScrollToTop();
    });

    function smoothScrollToTop() {
        const currentPosition = window.scrollY; // Get the current scroll position
        let start = null;

        // Function to animate the scroll to the top
        function step(timestamp) {
            if (!start) start = timestamp; // Set the start time
            let progress = timestamp - start; // Calculate progress
            let newPosition = Math.max(currentPosition - (currentPosition / 800) * progress, 0); // Calculate new scroll position
            window.scrollTo(0, newPosition); // Scroll to the new position
            if (newPosition > 0) {
                window.requestAnimationFrame(step); // Continue animation if not at the top
            }
        }

        window.requestAnimationFrame(step); // Start the animation
    }
});


/*-----------------Product Page---------------- */

function openProductPage(url) {
    let width, height;

    // Check if the device is mobile or not
    if (window.innerWidth <= 768) { // For screens 768px wide or less (typically mobile)
        width = 300;
        height = 500;
    } else { // For larger screens (tablets, desktops)
        width = 600;
        height = 600;
    }

    // Open the product page in a new window with the appropriate dimensions
    window.open(url, '_blank', `width=${width},height=${height}`);
}



/*-------------------Search Bar Message--------------------*/

// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    
    // Get the search bar element by its ID
    const searchBar = document.getElementById('searchBar');
    
    // Get the confirmation message element using jQuery
    const searchConfirmationMessage = $('#confirmationMessage');

    // Check if the search bar element exists
    if (searchBar) {
        
        // Add a click event listener to the search bar
        searchBar.addEventListener('click', function() {
            
            // Stop any ongoing animations on the confirmation message
            // and reset its state, ensuring the animation runs smoothly
            searchConfirmationMessage.stop(true, true).fadeIn(1000)  // Fade in the message over 1 second
                                     .delay(1000)   // Keep the message visible for 1 second
                                     .fadeOut(1000); // Fade out the message over 1 second
        });
    }
});
