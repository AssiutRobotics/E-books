
{
    let container = document.getElementById('myproducts-content');
    //fetch for books
    fetch('https://e-books-mu.vercel.app/books/all')
        .then((res) => res.json())
        .then((data) => {
            let books = data.data.books
            console.log(books);

            books.forEach((book) => {
                // create element for each book.
                let content = `
           <div class=" productContent" >
                    <div class="product link"id=${book._id} >
                        <a href="">Amazon</a>
                         <a  class="product-name"href="" >${book.title}</a>
                        <img src="${book.coverImageUrl}" alt="">
                        <div class="price">
                            <span class="current-price">$${book.discountedPrice}</span>
                            <span class="original-price">$${book.originalPrice}</span>
                            <span class="discount">-${book.discountPercentage}</span>
                        </div>
                     </div>
                        <div class="fadeOut facilities">
                            <span><i class="fa-solid fa-pen"></i></span>
                            <span><i class="fa-solid fa-trash"></i></span>
                        </div>
                    
            </div>`
                // pass them to the container of them

                container.innerHTML += content
            })
            attachClickEvents();
            hoverEffect();
        }).catch((err) => {
            console.log("Error fetching books:", err);
        });

    function attachClickEvents() {
        let buttons = document.querySelectorAll(".link");
        console.log("buttons");

        console.log(buttons);
        if (buttons.length > 0) {
            buttons.forEach((button) => {
                button.addEventListener("click", (e) => {
                    let bookId = e.currentTarget.id;
                    if (bookId) {
                        localStorage.setItem("book", bookId);
                        window.location.href = "../product/index.html";
                    }
                });
            });

        }
    }

}
