// Get elements
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

// Add event listener on click
loginButton.addEventListener("click", (e) => {
    e.preventDefault();

    // Get username and password
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    // Check username and password
    if (username === "" && password === "") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        // Show error message
        loginErrorMsg.style.opacity = 1;
    }
});
