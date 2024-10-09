document.addEventListener('DOMContentLoaded', function() {
    const emailSubmit = document.getElementById('emailSubmit');
    const getCodeButton = document.getElementById('Getcode');
    const submitButton = document.getElementById('submit');
    const errorMessage = document.getElementById('errorMessage');

    let userEmail = ''; // Variable to store the user's email

    // Email submission event listener
    emailSubmit.addEventListener('click', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value.trim();
        if (!email) {
            errorMessage.textContent = 'You should enter your Email';
            return;
        }

        // Store the email for later use in OTP verification
        userEmail = email;

        fetch('/forgetPassword/send-otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email }),
        })
        .then(response => response.json())
        .then(data => {
            if (response.ok) {
                console.log('OTP sent successfully:', data);
                // Display a success message or prompt the user to enter the OTP
                errorMessage.textContent = 'OTP has been sent to your email.';
            } else {
                console.error('Error:', data);
                errorMessage.textContent = data.message || 'An error occurred while sending the OTP';
            }
        })
        .catch(error => {
            console.error('Error has happened:', error);
            errorMessage.textContent = 'An error occurred while sending the OTP';
        });
    });

    // Phone number submission event listener (if applicable)
    getCodeButton.addEventListener('click', function(event) {
        event.preventDefault();
        const phoneInputs = Array.from(document.querySelectorAll('.phoneNumber input'));
        const phoneNumber = phoneInputs.map(input => input.value).join('');
        if (!phoneNumber || phoneNumber.length !== 11) {
            errorMessage.textContent = 'You should enter a valid Phone Number';
            return;
        }

        // Store the phone number for later use if needed
        // ...

        fetch('/forgetPassword/phone-otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ phoneNumber }),
        })
        .then(response => response.json())
        .then(data => {
            if (response.ok) {
                console.log('OTP sent successfully to phone:', data);
                errorMessage.textContent = 'OTP has been sent to your phone.';
            } else {
                console.error('Error:', data);
                errorMessage.textContent = data.message || 'An error occurred while sending the phone OTP';
            }
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
        const otp = otpInputs.map(input => input.value.trim()).join('');
        if (!otp || otp.length !== 5) {
            errorMessage.textContent = 'You should enter the correct 5-digit OTP';
            return;
        }
        if (!userEmail) {
            errorMessage.textContent = 'Email is missing. Please request a new OTP.';
            return;
        }

        fetch('/forgetPassword/verify-otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: userEmail, otp }),
        })
        .then(async response => {
            const data = await response.json();
            if (response.ok) {
                console.log('OTP verification success:', data);
                
                window.location.href = '../resetPassword.html';
            } else {
                console.error('OTP verification failed:', data);
                errorMessage.textContent = data.message || 'OTP verification failed.';
            }
        })
        .catch(error => {
            console.error('Error has happened:', error);
            errorMessage.textContent = 'An error occurred while verifying the OTP';
        });
    });
});
