import {json} from "express";

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Basic validation
    if (username === '' || password === '') {
        document.getElementById('error-message').textContent = 'Both fields are required.';
    }
    // else {
    //     fetch('/login', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({username: username, password: password}),
    //     })
    //         .then(response => {
    //             if (response.ok) {
    //                 return response.text();
    //             } else {
    //                 throw new Error('Login failed');
    //             }
    //         })
    //         .then(data => {
    //             document.body.innerHTML =  data; // This will replace the body with the response content
    //         })
    //         .catch(error => {
    //             document.getElementById('error-message').textContent = 'Login failed with ' + error.message;
    //         });

});
