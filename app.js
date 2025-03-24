// make taps 
{
    let arr_of_taps = Array.from(document.getElementsByClassName('Taps'));
    // console.log(arr_of_taps);

    let arr_of_contents = [document.getElementsByClassName('Featured_Products')[0],
    document.getElementsByClassName('New_Arrivals')[0],
    document.getElementsByClassName('Most-viewed')[0]
    ];
    // console.log(arr_of_contents);

    arr_of_taps.forEach((tap, index) => {
        tap.addEventListener('click', () => {
            arr_of_contents.forEach((content, index_of_content) => {
                if (index == index_of_content) {
                    content.classList.remove('disabled')
                } else {
                    content.classList.add('disabled')
                }
            })
            tap.classList.add('active');
            arr_of_taps.forEach((tap, index_of_tap) => {
                if (index != index_of_tap) {
                    tap.classList.remove('active');
                }
            })
        })
    })
}
// make the hover effect on the products
{
    function hoverEffect() {
        let arr_of_products = Array.from(document.getElementsByClassName('productContent'));
        let arr_of_product = Array.from(document.getElementsByClassName('product'));

        // console.log(arr_of_products);

        arr_of_products.forEach((product) => {
            let product_facilities = product.getElementsByClassName('facilities')[0];
            // console.log(product_facilities);

            if (!product_facilities) return;

            product.addEventListener('mouseover', () => {
                product_facilities.classList.remove('fadeOut');
                product_facilities.classList.add('fadeIn');

            })
            product.addEventListener('mouseout', () => {
                product_facilities.classList.remove('fadeIn');
                product_facilities.classList.add('fadeOut');

            })
        })

        arr_of_product.forEach((product) => {
            let product_facilities = product.getElementsByClassName('facilities')[0];
            // console.log(product_facilities);

            if (!product_facilities) return;

            product.addEventListener('mouseover', () => {
                product_facilities.classList.remove('fadeOut');
                product_facilities.classList.add('fadeIn');

            })
            product.addEventListener('mouseout', () => {
                product_facilities.classList.remove('fadeIn');
                product_facilities.classList.add('fadeOut');

            })
        })
    }

    hoverEffect();
}
// make the account hover mak action 
{
    // account dropdown list
    let list_of_my_account = document.getElementById('my_account');
    let account_sub_menu = document.getElementById('account_sub_menu');
    // console.log(list_of_my_account,account_sub_menu);

    list_of_my_account.addEventListener('click', () => {
        account_sub_menu.classList.toggle('dropDown');
        account_sub_menu.classList.toggle('liftUp');
    })
    list_of_my_account.addEventListener('mouseleave', () => {
        account_sub_menu.classList.remove('dropDown');
        account_sub_menu.classList.add('liftUp');

    })

    // dropdown lists 
    let list_of_lists_container = Array.from(document.getElementsByClassName('sub_menu_container'));
    let list_of_lists = Array.from(document.getElementsByClassName('sub_menu'));

    // console.log(list_of_lists_container, list_of_lists);


    list_of_lists_container.forEach((container, index) => {
        // console.log(container,index);

        container.addEventListener('click', () => {
            list_of_lists[index].classList.toggle('dropDown');
            list_of_lists[index].classList.toggle('liftUp');
        })
    })
    list_of_lists_container.forEach((container, index) => {
        container.addEventListener('mouseleave', () => {
            list_of_lists[index].classList.remove('dropDown');
            list_of_lists[index].classList.add('liftUp');
        })
    })

}

// make more/less categories
// {
//     let more_categories = document.getElementById('height_controller');
//     let counter = 0
//     let mid_element = document.getElementById('mid_element');
//     more_categories.addEventListener('click', () => {
//         if(counter == 1){
//             counter = 0;
//         }
//         else
//         {
//             document.getElementById('categories_content').style.height = "16.8rem";
//             counter = 1;
//         }
//     })
// }

// make the slider image
{
    let index = 0;
    let images = document.querySelectorAll('.slider_img');
    let author = ["H.G.VVeIIs", "I.D. Kurtness"];
    let name = ["Empire Of The Ants", "De Vengeance"];
    let description = ["Cover up front of book and leave summary",
        "Cover up front of book and leave summary",
    ];
    let author_name = document.getElementById('author_name');
    let book_name = document.getElementById('book_name');
    let book_description = document.getElementById('description');
    let buttonContainer = document.getElementById('numbers');
    let buttons = [];

    for (let i = 0; i < images.length; i++) {
        let Button = document.createElement('button');
        Button.classList.add('button_of_slider');
        buttonContainer.appendChild(Button);
        buttons.push(Button);
    }

    if (0 < images.length) {
        buttons[0].classList.add('Active');
        images[0].classList.add('visible');
    }

    let next = document.getElementById('next');
    let prev = document.getElementById('prev');

    function updateButtons() {
        buttons.forEach((btn, i) => {
            if (i === index) {
                btn.classList.add('Active');
            } else {
                btn.classList.remove('Active');
            }
        });
    }

    function updateImages() {
        images.forEach((img, i) => {
            if (i === index) {
                img.classList.add('visible');
                author_name.innerHTML = author[i];
                book_name.innerHTML = name[i];
                book_description.innerHTML = description[i];
            } else {
                img.classList.remove('visible');
            }
        });
    }

    function Next() {
        images[index].classList.remove('visible');
        buttons[index].classList.remove('Active');

        index = (index + 1) % images.length;

        updateImages();
        updateButtons();
    }

    function Prev() {
        images[index].classList.remove('visible');
        buttons[index].classList.remove('Active');

        index = (index - 1 + images.length) % images.length;
        updateImages();
        updateButtons();
    }

    function moving(target) {
        images[index].classList.remove('visible');
        buttons[index].classList.remove('Active');

        index = target;

        updateImages();
        updateButtons();
    }

    if (next) {
        next.addEventListener('click', () => Next());
    }
    if (prev) {
        prev.addEventListener('click', () => Prev());
    }

    buttons.forEach((btn, i) => {
        btn.addEventListener('click', () => moving(i));
    });

    function auto(x = 5000) {
        let interval = setInterval(() => {
            Next();
        }, x);
        return interval;
    }

    if (next) {
        auto();
    }
}

// make the search bar
{
    let search_bar = document.getElementById('search_bar');
    let search_btn = document.getElementById('search_btn');
    let found_data_container = document.getElementById('found_data_container');
    search_bar.addEventListener('focus', () => {
        found_data_container.classList.remove('disabled');
        search_bar.addEventListener('change', () => {
            // search in data base and return the result in div
            if (flase) {
                let content = `<div class="search_result">
                                <img src="SOURCE" alt="">
                                <div class="result_info">
                                    <h6 class="title">TITLE</h6>
                                    <p class="price">$SALARY</p>
                                </div>
                            </div>`
                found_data_container.innerHTML += content
            }
        })

    })
    search_bar.addEventListener('blur', () => {
        found_data_container.classList.add('disabled');
    })
}
// Get books 
{
    let container = document.getElementById('products-content');

    if (container) {
        //fetch for books
        fetch('https://e-books-mu.vercel.app/books/all')
            .then((res) => res.json())
            .then((data) => {
                let books = data.data
                // console.log(books);

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
                        <span class="discount">-${book.discountPercentage.toFixed(2)}%</span>
                    </div>
                 </div>
                    <div class="fadeOut facilities">
                   
                    <span onclick="add_to_cart('${book._id}')"><i class="fa-solid fa-cart-shopping"></i></span>
                    
                        <span><i class="fa-solid fa-heart"></i></span>
                        <span><i class="fa-solid fa-arrow-right-from-bracket"></i></span>
                        <span><i class="fa-solid fa-eye"></i></span>
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
    }


    function attachClickEvents() {
        let buttons = document.querySelectorAll(".link");
        // console.log("buttons");
        // console.log(buttons);

        if (buttons.length > 0) {
            buttons.forEach((button) => {
                button.addEventListener("click", (e) => {
                    let bookId = e.currentTarget.id;
                    if (bookId) {
                        localStorage.setItem("book", bookId);
                        window.location.href = "./product/index.html";
                    }
                });
            });

        }
    }

}



const add_to_cart = async (bookId) => {

    try {

        const data=JSON.parse(localStorage.getItem('data'));
        
        console.log("token is :",data.token);
        
        if(!data){
            alert("Please login first");
            return;
        }
        
    const response = await fetch('https://e-books-mu.vercel.app/user/addToCart',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${data.token}`
        },
        body: JSON.stringify({ bookId,quantity:1 })
    })

    const res = await response.json();
    console.log(res);
    if(!res.ok){
        alert(res.message);
        return;
    }
    
    alert("Book added to cart successfully");

    } catch (error) {
        console.log(error);
        alert(error.message);
    }
}

// make action when the user click on the product
