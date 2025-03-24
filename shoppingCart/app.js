document.addEventListener("DOMContentLoaded", function () {
    let data = localStorage.getItem("data");

    if (data) {
        let parsedData = JSON.parse(data);

        let user = parsedData.user;

        if (user) {
            document.getElementById("userName").textContent = `${user.first_name} ${user.last_name}`;
            document.getElementById("userEmail").textContent = user.email;
        }
    } else {
        console.log("لا توجد بيانات في Local Storage");
    }
});
