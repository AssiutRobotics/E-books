document.addEventListener("DOMContentLoaded", function () {
    
    let user = JSON.parse(localStorage.getItem("loggedInUser"));

    if (user && user.name && user.address) {
        document.getElementById("userName").textContent = user.name;
        document.getElementById("userAddress").textContent = user.address;
    } else {
    
        window.location.href = "../sign/index.html";
    }
});
