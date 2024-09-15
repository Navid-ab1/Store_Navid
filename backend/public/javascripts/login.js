document.addEventListener('DOMContentLoaded', function() {
    const token = localStorage.getItem('token');
    const userIcon = document.getElementById('userIcon');
    const logoutButton = document.getElementById('logoutButton');
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');

    // Function to update the UI based on login status
    function updateUI(isLoggedIn) {
        if (isLoggedIn) {
            userIcon.textContent = '👤 My Account'; 
            logoutButton.style.display = 'inline';  
            loginForm.style.display = 'none';       
        } else {
            userIcon.textContent = 'Login';         
            logoutButton.style.display = 'none';    
            loginForm.style.display = 'block';      
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
            console.log(username,password);
            return;
        }

       
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',                
            },
            body: JSON.stringify({ username, password })  

        })
            .then(response => response.json())
            .then(data => {
                if (data.token) {
                    localStorage.setItem('token', data.token);
                    updateUI(true);
                    errorMessage.textContent = '';  
                    window.location.href = '/contact.html';
                } else {
                    errorMessage.textContent = data.message ||'Invalid login credentials.';
                }
            })
            .catch(error => {
                console.error('Login error:', error);
                userIcon.textContent = 'An error occurred,Please try again later.';
            });
            
        
    });

    logoutButton.addEventListener('click', function() {
        localStorage.removeItem('token');

        // Update the UI to reflect the logged-out state
        updateUI(false);
        window.location.href = '/login.html';
    });
});


