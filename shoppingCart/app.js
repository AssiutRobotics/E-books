
document.addEventListener("DOMContentLoaded", function () {
  let data = localStorage.getItem("data");

  if (data) {
    let parsedData = JSON.parse(data);

    let user = parsedData.user;

    if (user) {
      document.getElementById(
        "userName"
      ).textContent = `${user.first_name} ${user.last_name}`;
      document.getElementById("userEmail").textContent = user.email;
    }
  } else {
    console.log("لا توجد بيانات في Local Storage");
    window.location.href = "../sign/index.html";
  }
});

/* --------------------------- get all cart data --------------------------- */
let { token } = JSON.parse(localStorage.getItem("data"));

if(!token){
  window.location.href = "../sign/index.html";
}

fetch("https://e-books-mu.vercel.app/user/getCart", {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((res) => {
    console.log(res.data);
    fillData(res.data);
  })
  .catch((error) => console.error("Error:", error));

/* -------------------------------- fillData -------------------------------- */

function fillData(data) {
  let = data;
  let price = 0;
  let quantity = 0;
  let total = 0;
  let cartTotalPrice;
  let drsh = "";
  for (i = 0; i < data.length; i++) {
    price = data[i].book.originalPrice - data[i].book.discountedPrice;
    quantity = data[i].quantity;

    drsh += `
        <tr id="${data[i].book._id}">
        <td id="imgage">
          <img id="img" src="${data[i].book.coverImageUrl}" alt="book image" />
        </td>
        <td id="product-name">
          <a
            href="https://google.com"
            target="_blank"
            title="View the book"
            >${data[i].book.title}</a
          >
        </td>
        <td id="quantity">
          <span
            ><input
              type="text"
              name=""
              id="quantity-number"
              value="${data[i].quantity}"
              disabled
              readonly
          /></span>
          <span >
            <button id="${
              data[i].book._id
            }" class="cancle"  onclick="deletBook(this)">
              <i class="fa-solid fa-xmark fa-xs"></i>
            </button>
          </span>
        </td>
        <td id="product-price">${price}</td>
        <td id="product-total">${price * quantity}</td>
        </tr>
        `;
    total += price * quantity;
  }
  document.getElementById("cartTotalPrice").value = total;
  document.getElementById("cart-data").innerHTML = drsh;
}
/* -------------------------------- deletBook ------------------------------- */

function deletBook(e) {
  fetch(`https://e-books-mu.vercel.app/user/removeFromCart`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      bookId: e.id,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to delete the item");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      location.reload();
    })
    .catch((error) => console.error("Error:", error));
}

/* --------------------------- logout --------------------------- */

document.querySelector(".logout").addEventListener("click", logout);
function logout() {
  localStorage.removeItem("data");
  window.location.href = "../";
}
