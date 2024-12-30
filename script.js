// script.js

// Add any JavaScript functionality here
document.addEventListener('DOMContentLoaded', function() {
    // Example: Add a simple alert on form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        alert('Thank you for your message!');
    });
});