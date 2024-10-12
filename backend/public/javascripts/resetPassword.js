const form = document.getElementById('reset')
const errorMessage = document.getElementById('error-Message')
form.addEventListener('submit',function(event){
    event.preventDefault()
    const pass =  document.getElementById("enterPass").value;
    const repass =  document.getElementById("reEnter").value;
    errorMessage.textContent = '';

    if (pass === repass){
        fetch('/resetPassword/updatePass',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'

            },
            body:JSON.stringify({pass}),
        })
        .then(response => {
            if (response.ok) {
                // Password updated successfully
                window.location.href = '../login.html';
            } else {
                // Handle errors from the server
                return response.json().then(data => {
                    throw new Error(data.message || 'Error during password reset');
                });
            }
        })
        .catch(error => {
            console.error('Error has happened:', error);
            errorMessage.textContent = error.message;
        });
    }
    else{
        errorMessage.textContent = 'Passwords do not match. Please try again.'
    }
});