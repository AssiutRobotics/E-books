







// render data to table
const table = document.getElementById('table');
const numberOfGuests = document.querySelector('#numberOfGuests');
let Guests ;
const renderGuests= async () => {
    try {
        const response = await fetch('https://e-books-mu.vercel.app/user/seen/getAllGuests');
        const data = await response.json();
        if(data.status != "success") {
            console.log('No data found');
            return;
        }
        numberOfGuests.innerText= data.data.length;
        Guests = data.data;
        console.log(Guests);
        Guests.forEach(guest => {
            console.log(guest.numberOfVisits);
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${guest.ip}</td>
                <td>${guest.numberOfVisits}</td>
                <td>${guest.history[guest.history.length - 1].startTime}</td>
                <td>${guest.history[guest.history.length - 1].endTime}</td>
                <td>${guest.history[guest.history.length - 1].timeSpent}</td>
            `;
            table.appendChild(row);
        });
    } catch (error) {
        console.log('Error fetching data:', error.message);
    }
}




const numberOfUsers = document.querySelector('#numberOfUsers');
const table2 = document.getElementById('table2');
let Users ;
renderUsers= async () => {
    try {
        const response = await fetch('http://localhost:3000/user/seen/getAllUsersVisits');
        const data = await response.json();
        console.log(
            data
        );
        
        if(data.status != "success") {
            console.log('No data found');
            return;
        }
        numberOfUsers.innerText= data.data.length;
        Users = data.data;
        console.log(Users);
        Users.forEach(user => {
            // console.log(user.numberOfVisits);
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.email}</td>
                <td>${user.first_name}</td>
                <td>${user.last_name}</td>
                <td>${user.numberOfVisits}</td>
            `;
            table2.appendChild(row);
        });
    } catch (error) {
        console.log('Error fetching data:', error.message);
    }
}


onload = () => {
    renderGuests();
    renderUsers();
}











