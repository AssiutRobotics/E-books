document.addEventListener("DOMContentLoaded", function () {
    // Retrieve user data from localStorage
    let user = JSON.parse(localStorage.getItem("loggedInUser"));

    // Check if user data exists
    if (user && user.name && user.address) {
        document.getElementById("userName").textContent = user.name;
        document.getElementById("userAddress").textContent = user.address;
    } else {
        // Redirect user to login page if no data is found
        window.location.href = "../sign/index.html";
    }
});
