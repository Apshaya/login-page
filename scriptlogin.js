document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the username and password from the input fields
    var email = document.getElementById('Username').value;
    var password = document.getElementById('password').value;

    // Process the username and password (e.g., authenticate the user)
    console.log('Username:', Username);
    console.log('Password:', password);
});