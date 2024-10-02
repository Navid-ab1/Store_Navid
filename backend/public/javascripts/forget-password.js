const { response } = require("express");

document.addEventListener('DOMContentLoaded',function(){
    const resetPassword = document.getElementById('resetPassword');
    const emailSubmit=document.getElementById('emailSubmit');
    const errorMessage = document.getElementById('errorMessage')
    
    resetPassword.addEventListener('submit',function(event){
        event.preventDefault();
        const email  = document.getElementById('email').value;
        if(!email){
            errorMessage.textContent = 'You should enter your Email';
            return;
        }
        fetch('/forgetPassword/send-otp',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email}),
        })
        .then(response => response.json())
        .then(data =>
            console.log('success: ',data)
        )
        .catch(error =>{
            console.error('Error has happened:', error);
            errorMessage.textContent = 'An error occurred while sending the OTP';
        })
    });
    const getCodeButton = document.getElementById('Getcode');
    getCodeButton.addEventListener('click',function(event){
        event.preventDefault();
        const phoneInputs = Array.from(document.querySelectorAll('.phoneNumber input'))
        if (!phoneInputs || phoneInputs.length < 10) {
            errorMessage.textContent = 'You should enter a valid Phone Number';
            return;
        }
        fetch('/forgetPassword/phone-otp',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({phoneNumber:phoneInputs})
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Handle response after sending phone OTP
        })
        .catch(error => {
            console.error('Error has happened:', error);
            errorMessage.textContent = 'An error occurred while sending the phone OTP';
        });
    });
    const submitButton = document.getElementById('submit');
    resetPassword.addEventListener('submit',function(event){
        event.preventDefault();
        const otp = Array.from(document.querySelectorAll('.code-inputs input')).map(input => input.value).join('');
        if (!otp || otp.length < 6) {
            errorMessage.textContent = 'You should enter the correct OTP';
            return;
        }
        fetch('/forgetPassword/verify-otp',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({otp}),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Handle OTP verification success (maybe redirect or show a message)
        })
        .catch(error => {
            console.error('Error has happened:', error);
            errorMessage.textContent = 'An error occurred while verifying the OTP';
        });
    });

})