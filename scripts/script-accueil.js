// Animation for First Visit

window.addEventListener('DOMContentLoaded', function() {
    // Select the splash screen element
    const splashScreen = document.getElementById('splash-screen');

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
