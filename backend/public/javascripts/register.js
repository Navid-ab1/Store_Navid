document.getElementById('registerForm').addEventListener('submit', function (event)  {
    event.preventDefault();
    const Name = document.getElementById('name').value.trim();
    const familyName = document.getElementById('family-name').value.trim();
    const address = document.getElementById('address').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const password = document.getElementById('Password').value.trim();
    if (Name.value === '' || familyName.value === '' || address.value === '' || phoneNumber.value === '' || password.value === '') {
        document.getElementById('error-message').textContent = 'fields are required.';
    }
});