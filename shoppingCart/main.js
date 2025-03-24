let token =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZTAzOWZhNTFlNDIzN2EwOTliMjA4OSIsImlhdCI6MTc0MjgyODIyMCwiZXhwIjoxNzQyOTE0NjIwfQ.R8uyTdyfyKMMIcw4P3BrSfef-IJ1slJjvousB-aYweI"

const url = "https://e-books-mu.vercel.app/user/getCart";

let imageUrl = document.getElementById("img");
let productName = document.getElementById("product-name");
let quantity = document.getElementById("quantity-number");
let productPrice = document.getElementById("product-price");
let productTotal = document.getElementById("product-total");

/* -------------------------------------------------------------------------- */
// fetch("https://e-books-mu.vercel.app/user/removeFromCart", {
//   method: "DELETE",
//   headers: {
//     Authorization: `Bearer ${token}`,
//     "Content-Type": "application/json",
//   },
// }).then(response => {
//   if (response.ok) {
//     console.log('Deleted successfully');
//   }else{
//     console.log('falid Delete');
    
//   }
// })

// .catch(error => console.error('Error:', error));
// // .then((res) => res.json())
// // .then((res) => console.log(res))
// // .catch((error) => console.error("Error:", error));





// // /* --------------------------- get all cart data --------------------------- */
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
    // fillData(res.data);
  })
  .catch((error) => console.error("Error:", error));
// // /* -------------------------------------------------------------------------- */
// function fillData(data) {
//   let = data;
//   let drsh = "";
//   for (i = 0; i < data.length; i++) {
//     drsh += `
//         <tr>
//         <td id="imgage">
//           <img id="img" src="./imgs/book-1.png" alt="book image" />
//         </td>
//         <td id="product-name">
//           <a
//             href="https://google.com"
//             target="_blank"
//             title="View the book"
//             >anthrplogie amérndene - franz</a
//           >
//         </td>
//         <td id="quantity">
//           <span
//             ><input
//               type="text"
//               name=""
//               id="quantity-number"
//               value="${data[i].quantity}"
//               disabled
//               readonly
//           /></span>
//           <span>
//             <button id="refresh">
//               <i class="fa-solid fa-repeat fa-xs"></i>
//             </button>
//             <button id="cancle">
//               <i class="fa-solid fa-xmark fa-xs"></i>
//             </button>
//           </span>
//         </td>
//         <td id="product-price">1000</td>
//         <td id="product-total">1000</td>
//       </tr>
//       `;
//   }
//   document.getElementById("cart-data").innerHTML = drsh;
// }
