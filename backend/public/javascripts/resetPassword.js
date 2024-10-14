const form = document.getElementById('reset')
const errorMessage = document.getElementById('error-Message')
form.addEventListener('submit',function(event){
    event.preventDefault()
    const pass =  document.getElementById("enterPass").value;
    const repass =  document.getElementById("reEnter").value;
    const phoneNumber = document.getElementById("phoneNum").value;
    errorMessage.textContent = '';

    if (phoneNumber === null ){
        errorMessage.textContent = 'Phone Number is not entered. Please try again.'
    }
    if (pass === repass){
        fetch('/resetPassword/updatePass',{
            method:'PATCH',
            headers:{
                'Content-Type':'application/json'

            },
            body:JSON.stringify({phoneNumber,pass}),
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