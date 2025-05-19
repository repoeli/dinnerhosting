// This file manages authentication-related functionalities, including user registration and login processes.

document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const submitLogin = document.getElementById('submitLogin');
    const closeLoginModal = document.getElementById('closeLoginModal');
    const loginModal = document.getElementById('loginModal');

    // Show login modal
    loginBtn.addEventListener('click', function() {
        loginModal.style.display = 'block';
    });

    // Close login modal
    closeLoginModal.addEventListener('click', function() {
        loginModal.style.display = 'none';
    });

    // Handle login submission
    submitLogin.addEventListener('click', function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Perform login logic here (e.g., API call)
        console.log('Logging in with', username, password);
        // Close modal after login
        loginModal.style.display = 'none';
    });

    // Handle registration logic (if applicable)
    if (registerBtn) {
        registerBtn.addEventListener('click', function() {
            // Show registration modal or handle registration logic
            console.log('Show registration modal');
        });
    }
});