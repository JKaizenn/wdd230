document.getElementById('userForm').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const emailField = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;

    // Password validation
    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        document.getElementById('password').value = '';
        document.getElementById('confirmPassword').value = '';
        document.getElementById('password').focus();
        event.preventDefault();
        return;
    }

    // Email validation
    if (!emailPattern.test(emailField)) {
        alert('Invalid email address. Please use a BYUI email ending with @byui.edu.');
        document.getElementById('email').focus();
        event.preventDefault();
        return;
    }

    // If all validation passes
    alert('Form has been filled out successfully.');
});
