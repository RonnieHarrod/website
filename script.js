// script.js

// Smooth scrolling function
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Handle for submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name === '' || email === '' || message === '') {
        document.getElementById('form-response').textContent = 'Please fill in all fields.';
        return;
    }

    // Simulate form submission
    document.getElementById('form-response').textContent = 'Thank you for your message!';
    document.getElementById('contact-form').reset();
});