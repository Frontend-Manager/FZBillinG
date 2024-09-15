document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the username and password are correct
    if (username === 'admin' && password === 'admin') {
        showModal(); // Show the success modal
    } else {
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = 'Invalid username or password';
    }
});

function showModal() {
    const modal = document.getElementById('successModal');
    modal.style.display = 'block';

    // Close the modal when the close button is clicked
    document.querySelector('.close-btn').onclick = function() {
        modal.style.display = 'none';
        window.location.href = 'http://192.168.232.18:5500/Html.html'; // Redirect to the dashboard or desired page
    };

    // Close the modal when clicking outside the modal content
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            window.location.href = 'http://192.168.232.18:5500/Html.html'; // Redirect to the dashboard or desired page
        }
    };
}
