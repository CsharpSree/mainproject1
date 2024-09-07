function validateForm() {
    // Get form elements
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    let isValid = true;

    // Clear previous errors
    document.getElementById('usernameError').classList.add('hidden');
    document.getElementById('passwordError').classList.add('hidden');

    // Check if username is empty
    if (username.value.trim() === '') {
        document.getElementById('usernameError').classList.remove('hidden');
        isValid = false;
    }

    // Check if password is empty
    if (password.value.trim() === '') {
        document.getElementById('passwordError').classList.remove('hidden');
        isValid = false;
    }

    return isValid;
}
