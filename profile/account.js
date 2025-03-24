document.addEventListener("DOMContentLoaded", function () {
    try {
        let storedData = localStorage.getItem("data");
        
        if (!storedData) {
            console.warn("No user data found. Redirecting...");
            return window.location.href = "../sign/index.html";
        }

        let parsedData = JSON.parse(storedData);
        let { token, user } = parsedData;

        console.log("User: ", user);
        console.log("Token: ", token);

        if (user && user.email) {
            document.getElementById("email").textContent = user.email || "(No email)";
            document.getElementById("first_name").textContent = user.first_name || "(No first name)";
            document.getElementById("last_name").textContent = user.last_name || "(No last name)";
        } else {
            console.warn("Invalid user data. Redirecting...");
            window.location.href = "../sign/index.html";
        }
    } catch (error) {
        console.error("Error parsing user data:", error);
        window.location.href = "../sign/index.html";
    }
});
