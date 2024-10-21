document.getElementById('userForm').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        document.getElementById('password').value = '';
        document.getElementById('confirmPassword').value = '';
        document.getElementById('password').focus();
        event.preventDefault();
    } else {
        alert('Form has been filled out correctly.');
    }
});
