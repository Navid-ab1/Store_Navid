document.addEventListener('DOMContentLoaded', function() {
    // Check if the user is logged in (i.e., if JWT token exists in localStorage)
    const token = localStorage.getItem('token');
    const userIcon = document.getElementById('userIcon');
    const logoutButton = document.getElementById('logoutButton');
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');

    // Function to update the UI based on login status
    function updateUI(isLoggedIn) {
        if (isLoggedIn) {
            userIcon.textContent = '👤 My Account';  // Change to user icon when logged in
            logoutButton.style.display = 'inline';  // Show logout button
            loginForm.style.display = 'none';       // Hide the login form
        } else {
            userIcon.textContent = 'Login';         // Change to login text when logged out
            logoutButton.style.display = 'none';    // Hide logout button
            loginForm.style.display = 'block';      // Show the login form
        }
    }

    // Initial UI setup based on token presence
    updateUI(!!token);

    // Handle login form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent default form submission

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!username || !password) {
            errorMessage.textContent = 'Both username and password are required.';
            return;
        }

        // Send the login request using fetch()
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
            .then(response => response.json())
            .then(data => {
                if (data.token) {
                    // Store the JWT token in localStorage
                    localStorage.setItem('token', data.token);

                    // Update the UI to reflect the logged-in state
                    updateUI(true);
                    errorMessage.textContent = '';  // Clear any error messages
                } else {
                    errorMessage.textContent = 'Invalid login credentials.';
                }
            })
            .catch(error => {
                console.error('Login error:', error);
                errorMessage.textContent = 'An error occurred. Please try again later.';
            });
    });

    // Handle logout button click
    logoutButton.addEventListener('click', function() {
        // Remove the token from localStorage
        localStorage.removeItem('token');

        // Update the UI to reflect the logged-out state
        updateUI(false);
    });
});





























// import {json} from "express";
//
// document.getElementById('loginForm').addEventListener('submit', function (event) {
//     event.preventDefault();
//
//     const username = document.getElementById('username').value.trim();
//     const password = document.getElementById('password').value.trim();
//
//     // Basic validation
//     if (username === '' || password === '') {
//         document.getElementById('error-message').textContent = 'Both fields are required.';
//     }
//     fetch('/login', {
//         method: 'Post',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify({username, password})
//     })
//         .then(res => res.json())
//         .then(data => {
//             if (data.token){
//                 localStorage.setItem('token',data.token);
//                 window.location.href = 'contact.html';
//             }
//             else{
//                 document.getElementById('error-message').textContent = 'Invalid login credentials'
//
//             }
//         })
//         .catch(error =>{
//             console.error('Error',error);
//             document.getElementById('error-message').textContent = 'An error occurred.Please try again later.';
//         })
//
// });
