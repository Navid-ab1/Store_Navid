document.addEventListener('DOMContentLoaded', function() {
    const emailSubmit = document.getElementById('emailSubmit');
    const getCodeButton = document.getElementById('Getcode');
    const submitButton = document.getElementById('submit');
    const errorMessage = document.getElementById('errorMessage');

    // Email submission event listener
    emailSubmit.addEventListener('click', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        if (!email) {
            errorMessage.textContent = 'You should enter your Email';
            return;
        }
        fetch('/forgetPassword/send-otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Handle success (e.g., display a message or proceed to next step)
        })
        .catch(error => {
            console.error('Error has happened:', error);
            errorMessage.textContent = 'An error occurred while sending the OTP';
        });
    });

    // Phone number submission event listener
    getCodeButton.addEventListener('click', function(event) {
        event.preventDefault();
        const phoneInputs = Array.from(document.querySelectorAll('.phoneNumber input'));
        const phoneNumber = phoneInputs.map(input => input.value).join('');
        if (!phoneNumber || phoneNumber.length !== 11) {
            errorMessage.textContent = 'You should enter a valid Phone Number';
            return;
        }
        fetch('/forgetPassword/phone-otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ phoneNumber }),
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

    // OTP code submission event listener
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        const otpInputs = Array.from(document.querySelectorAll('.code-inputs input'));
        const otp = otpInputs.map(input => input.value).join('');
        if (!otp || otp.length !== 5) {
            errorMessage.textContent = 'You should enter the correct OTP';
            return;
        }
        fetch('/forgetPassword/verify-otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ otp }),
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
});
