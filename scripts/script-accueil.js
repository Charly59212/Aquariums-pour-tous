// Animation for First Visit

window.addEventListener('DOMContentLoaded', function() {
    // Select the splash screen element
    const splashScreen = document.getElementById('splash-screen');

        // Media Query to change text size and container size for small screens
        function applyResponsiveStyles() {
            const mediaQuery = window.matchMedia('(max-width: 768px)'); // Match screens 768px and below
            const animatedText = document.getElementById('accueil'); // Target the element with the ID 'accueil'
            const container = document.getElementById('container'); // Target the container element (if applicable)
    
            if (mediaQuery.matches) { // If the media query matches
                animatedText.style.fontSize = '20px'; // Set text size to 20px
                if (container) {
                    container.style.width = '90%'; // Adjust container width to 90%
                    container.style.margin = '0 auto'; // Center the container
                    container.style.padding = '10px'; // Add padding to the container if necessary
                }
            } else {
                animatedText.style.fontSize = ''; // Reset text size for larger screens
                if (container) {
                    container.style.width = ''; // Reset container width for larger screens
                    container.style.margin = ''; // Reset container margin
                    container.style.padding = ''; // Reset container padding
                }
            }
        }
    
        // Apply styles immediately on load
        applyResponsiveStyles();
    
        // Listen for changes in screen size and apply styles accordingly
        window.addEventListener('resize', applyResponsiveStyles);
    // Check if the user has visited the site before using sessionStorage
    if (!sessionStorage.getItem('hasVisited')) {
        // Dynamically create more bubbles for the animation
        for (let i = 0; i < 50; i++) { // Increase the number of bubbles if needed
            const bubble = document.createElement('div'); // Create a new div for each bubble
            bubble.classList.add('bubble'); // Add the 'bubble' class to the div
            
            // Position the bubbles randomly on the screen
            bubble.style.left = `${Math.random() * 100}%`; // Randomize horizontal position
            bubble.style.top = `${Math.random() * 100}%`; // Randomize vertical position
            bubble.style.animationDuration = `${Math.random() * 3 + 3}s`; // Set animation duration between 3 and 6 seconds
            
            // Add the bubble to the splash screen
            splashScreen.appendChild(bubble);
        }

        // Display the splash screen
        splashScreen.style.display = 'flex';

        // Remove the splash screen after 5 seconds
        setTimeout(function() {
            splashScreen.remove(); // Remove the splash screen from the DOM
            // Mark the user as having visited the site
            sessionStorage.setItem('hasVisited', 'true');
        }, 5000); // The splash screen lasts for 5 seconds
    } else {
        // Immediately hide the splash screen if the user has already visited
        splashScreen.style.display = 'none';
    }
});
