// This file contains the dynamic behavior for the Dinner Hosting homepage.
// It includes functions to manage user interactions such as showing modals for registration and login.

document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const closeLoginModal = document.getElementById('closeLoginModal');
    const closeRegisterModal = document.getElementById('closeRegisterModal');
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');

    // Show login modal
    loginBtn.addEventListener('click', function() {
        loginModal.style.display = 'block';
    });

    // Show register modal
    registerBtn.addEventListener('click', function() {
        registerModal.style.display = 'block';
    });

    // Close login modal
    closeLoginModal.addEventListener('click', function() {
        loginModal.style.display = 'none';
    });

    // Close register modal
    closeRegisterModal.addEventListener('click', function() {
        registerModal.style.display = 'none';
    });

    // Close modals when clicking outside of them
    window.addEventListener('click', function(event) {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target === registerModal) {
            registerModal.style.display = 'none';
        }
    });
});