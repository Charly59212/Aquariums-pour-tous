/*---------------------------Confirm Send Message------------------------*/

document.addEventListener('DOMContentLoaded', function() {
    // Select the contact form element by its ID
    const contactForm = document.getElementById('contactForm');
    // Select the confirmation message using jQuery
    const confirmationMessage = $('#sendMessage');
    // Select the close button element by its ID
    const closeButton = document.getElementById('closeBtn');

    // Script for the close/return button
    closeButton.addEventListener('click', function() {
        // Go back to the previous page in the browser history
        window.history.back(); 
    });

    // Script for the confirmation message
    if (contactForm) { // Check if the contact form exists
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent the form from submitting normally

            // Show the confirmation message with a fade-in effect using jQuery
            confirmationMessage.fadeIn(1500) // Fade in over 1.5 seconds
                               .delay(2000)  // Keep the message visible for 2 seconds
                               .fadeOut(1000, function() { // Fade out over 1 second
                // Once the message is fully hidden, go back to the previous page
                window.history.back(); 
            });
        });
    }
});



