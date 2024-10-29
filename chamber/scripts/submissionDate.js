// Set the timestamp when the form is loaded
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submissionDate').value = new Date().toISOString();
});

// Password matching validation
const form = document.querySelector('form');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password');

form.addEventListener('submit', function (e) {
    if (password.value !== confirm_password.value) {
        e.preventDefault();
        alert('Passwords do not match. Please try again.');
        password.value = '';
        confirm_password.value = '';
        password.focus();
    }
});
