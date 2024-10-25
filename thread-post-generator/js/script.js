// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('nav ul');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Close the menu when a link is clicked (for better UX)
    const navItems = document.querySelectorAll('nav ul li a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });

    // Handle Thread Generation
    const threadForm = document.getElementById('threadForm');
    const generatedThread = document.getElementById('generatedThread');

    threadForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const title = document.getElementById('title').value.trim();
        const content = document.getElementById('content').value.trim();

        if (!title || !content) {
            alert('Please fill in all fields.');
            return;
        }

        generatedThread.innerHTML = `
            <h4>${escapeHTML(title)}</h4>
            <p>${escapeHTML(content)}</p>
        `;
        generatedThread.classList.remove('hidden');
        threadForm.reset();
    });

    // Handle Contact Form Submission
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // Placeholder for form submission logic (e.g., API call)
        // You can integrate with a backend service here

        alert('Thank you for contacting us!');
        contactForm.reset();
    });

    // Utility function to escape HTML
    function escapeHTML(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }
});