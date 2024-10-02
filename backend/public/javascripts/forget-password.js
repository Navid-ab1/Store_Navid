const { response } = require("express");

document.addEventListener('DOMContentLoaded',function(){
    const resetPassword = document.getElementById('resetPassword');
    const emailSubmit=document.getElementById('emailSubmit');
    const errorMessage = document.getElementById('errorMessage')
    
    resetPassword.addEventListener('emailSubmit',function(event){
        event.preventDefault();
        const Email_Forget  = document.getElementById('email');
        if(!Email_Forget){
            errorMessage.textContent = 'You should enter your Email';
        }
        fetch('/forgetPassword/send-otp',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({Email_Forget})
        })
        .then(response => response.json)
        .catch(error =>{
            console.error('Error has happened.')
        })
    });

    resetPassword.addEventListener('Getcode',function(event){
        event.preventDefault();
        const phoneInputs = document.querySelectorAll('.phoneNumber input')
        fetch('/forgetPassword/phone-otp',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({phoneInputs})
        })
        .then(response => response.json)
        .catch(error =>{
            console.error('Error has happened.')
        })
    });

    resetPassword.addEventListener('sumbit',function(event){
        event.preventDefault();
        const otp = document.querySelectorAll('.code-inputs input')
        fetch('/forgetPassword/verify-otp',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({otp})
        })
        .then(response => response.json)
        .catch(error =>{
            console.error('Error has happened.')
        })
    });

})