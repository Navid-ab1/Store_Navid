document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    // Get form data
    var username = document.getElementById('username').value;
    var password = document.getElementById('passwordt').value;
    console.log(password)
    // Basic validation (you can enhance this as needed)
    if (username === '' || password === '') {
        document.getElementById('error-message').textContent = 'Both fields are required.';
    } else {
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers:{
                'content-type': 'application/x-www-form-urlencoded',
            },
            body : `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`,
        })
            .then(response => {
                if (response.ok) {
                    return response.txt();
                }
                else {
                    throw new Error('login failed');

                }
            })
            .catch(error => {
                document.getElementById('error-message').textContent = 'login failed with ' + error.message;
            })
    }
});
