// script.js (Enhanced with AJAX and message handling)
const form = document.getElementById('unsubscribe-form');
const emailInput = document.getElementById('email');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const email = emailInput.value;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        displayMessage("Please enter a valid email address.", "error");
        return;
    }


    // Make AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "your-server-side-script.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText); // Assuming JSON response
            displayMessage(response.message, response.status);
        }
    };
    xhr.send("email=" + encodeURIComponent(email));
});


function displayMessage(message, status) {
    messageDiv.textContent = message;
    messageDiv.classList.remove("success", "error"); // Clear previous classes
    messageDiv.classList.add(status); // Add the appropriate class
}