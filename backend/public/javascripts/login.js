document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    // Get form data
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Basic validation (you can enhance this as needed)
    if (username === '' || password === '') {
        document.getElementById('error-message').textContent = 'Both fields are required.';
    } else {
        // Perform login logic (e.g., send data to a server)
        // For demonstration, we just show a success message
        document.getElementById('error-message').textContent = '';
        alert('Login successful!');
    }
});
