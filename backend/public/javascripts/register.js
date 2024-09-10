document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const green_color = "#4cae4c"
    const red_color = "#ff0000"
    let message = document.getElementById('errorPassword');
    let messageSubmit = document.getElementById('errorMessage');
    let messagePhone = document.getElementById('phone_error');
    const Name = document.getElementById('name').value.trim();
    const familyName = document.getElementById('familyName').value.trim();
    const address = document.getElementById('address').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const password = document.getElementById('Password');

    if (Name === '' || familyName === '' || address === '' || phoneNumber === '' || password === '') {
        messageSubmit.textContent = 'All fields marked with * are required.';
        messageSubmit.style.color = red_color;
        return false;

    }
    let first_phone = phoneNumber.charAt(0);
    let phone_length = phoneNumber.length;
    if (first_phone !== '0' || phone_length !== 11) {
        messagePhone.textContent = 'Phone number should be start with 0 and should have eleven length.';
        messagePhone.style.color = red_color;
        return false;
    }

    if (password.value.length >= 8) {
        password.style.borderColor = green_color;
        message.style.color = green_color;
        message.innerHTML = "Character number is ok";

    } else {
        password.style.borderColor = red_color;
        message.style.color = red_color;
        message.innerHTML = "you have to enter at least 8 characters";
        return false;
    }
    this.submit()
});