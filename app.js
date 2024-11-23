// make taps 
{
let arr_of_taps = Array.from(document.getElementsByClassName('Taps'));
console.log(arr_of_taps);

let arr_of_contents = [document.getElementsByClassName('Featured_Products')[0],
                       document.getElementsByClassName('New_Arrivals')[0],
                       document.getElementsByClassName('Most-viewed')[0]
                    ];
console.log(arr_of_contents);

arr_of_taps.forEach((tap,index) => {
    tap.addEventListener('click', () => {
        arr_of_contents.forEach((content,index_of_content) => {
            if(index == index_of_content){
                content.classList.remove('disabled')
            }else{
                content.classList.add('disabled')
            }
        })
        tap.classList.add('active');
        arr_of_taps.forEach((tap,index_of_tap) => {
            if(index != index_of_tap){
                tap.classList.remove('active');
            }
        })
    })
})
}
// make the hover effect on the products
{
    let arr_of_products = Array.from(document.getElementsByClassName('product'));
    console.log(arr_of_products);
    
    arr_of_products.forEach((product) => {
        let product_facilities = product.getElementsByClassName('facilities')[0];
        console.log(product_facilities);
        
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
// make the account hover mak action 
{
    let list_of_my_account = document.getElementById('my_account');
    let account_sub_menu = document.getElementById('account_sub_menu');
    console.log(list_of_my_account,account_sub_menu);
    
    list_of_my_account.addEventListener('click', () => {
        account_sub_menu.classList.remove('liftUp');
        account_sub_menu.classList.add('dropDown');
    })
    list_of_my_account.addEventListener('mouseleave', () => {
            account_sub_menu.classList.remove('dropDown');
        account_sub_menu.classList.add('liftUp');
        
    })

    let list_of_lists_container = Array.from(document.getElementsByClassName('sub_menu_container'));
    let list_of_lists = Array.from(document.getElementsByClassName('sub_menu'));

    console.log(list_of_lists_container, list_of_lists);


    list_of_lists_container.forEach((container,index) => {
        console.log(container,index);
        
        container.addEventListener('click', () => {
            list_of_lists[index].classList.remove('liftUp');
            list_of_lists[index].classList.add('dropDown');
            
        })
    })
    list_of_lists_container.forEach((container,index) => {
        container.addEventListener('mouseleave', () => {
            list_of_lists[index].classList.remove('dropDown');
            list_of_lists[index].classList.add('liftUp');
        })
    })

}
// make the slider image
{
    let index = 0;
    let images = document.querySelectorAll('.slider_img')   
    let buttonContainer = document.getElementById('numbers')
    let buttons = []
    for(let i = 0; i <images.length;i++){
        let Button = document.createElement('button')
        Button.classList.add('button_of_slider')
        buttonContainer.appendChild(Button)
        buttons.push(Button)
    }
    buttons[0].classList.add('Active')
    images[0].classList.add('visible')
    let next = document.getElementById('next')
    let prev = document.getElementById('prev')
    //////////////////////////////////////////////////////
    console.log(images);
    
    // next function
    if(index == images.length - 1)
    next.disabled = true 
    
    function Next(){
        prev.disabled = false   
        if(index < images.length - 1){
            console.log(index)
            if(index == -1){
                images[images.length - 1].classList.remove('visible')
                buttons[images.length - 1].classList.remove('Active')
                index = 0;
                images[index].classList.add('visible')
                buttons[index].classList.add('Active')
            }
            else{
                next.disabled = false
                console.log(index)
                images[index].classList.remove('visible')
                buttons[index].classList.remove('Active')
                index++
                images[index].classList.add('visible')
                buttons[index].classList.add('Active')
                if(index == images.length - 1)
                    // next.disabled = true 
                index = -1;
            }
        }
    }
    // prev functions
    function Prev(){
        next.disabled = false
        console.log(index);
    
        if(index >= 0){
            
            if(index == 0){
                images[index].classList.remove('visible')
                buttons[index].classList.remove('Active')
                index = 3;
                images[index].classList.add('visible')
                buttons[index].classList.add('Active')
            }
            else{
                prev.disabled = false   
                images[index].classList.remove('visible')
                buttons[index].classList.remove('Active')
                index--
                images[index].classList.add('visible')
                buttons[index].classList.add('Active')
                if(index == 0){
                    // prev.disabled = true
                    // index = 4;   
                }
            }
        }
        console.log(index);

    }
    // button function 
    function moving(target){
        if(target == images.length - 1)
        {
            next.disabled = true
            prev.disabled = false 
        }   
        else if(target == 0){
            prev.disabled = true
            next.disabled = false
        }
        else{
            next.disabled = false
            prev.disabled = false
        }
        console.log(index)
        console.log(target)
        images[index].classList.remove('visible')
        buttons[index].classList.remove('Active')
        index = target
        images[index].classList.add('visible')
        buttons[index].classList.add('Active')
    }
    console.log(buttons)
    ///////////////////////////////////////////////////////
    
    document.getElementById('next').addEventListener('click',() => Next())
    document.getElementById('prev').addEventListener('click',() => Prev())
    for(let i = 0; i < buttons.length;i++){
        buttons[i].addEventListener('click', () => {moving(i)})
    }
    function auto(x = 5000){
        let interval = setInterval(() => {
            Next()
        }, x);
        return interval;
    }
    auto()
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
            if(flase){
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
    //fetch for books
    fetch('https://e-books-production.up.railway.app/books/all')
    .then((res) => res.json())
    .then((data) => {
        let books = data.data.books
        console.log(books);
        
        books.forEach((book) => {
           // create element for each book.
           let content = `
           <div class="product">
                        <a href="">Amazon</a>
                        <a class="product-name" href="">${book.title}</a>
                        <img src="${book.coverImageUrl}" alt="">
                        <div class="price">
                            <span class="current-price">$${book.discountedPrice}</span>
                            <span class="original-price">$${book.originalPrice}</span>
                            <span class="discount">-${book.discountPercentage}</span>
                        </div>
                        <div class="fadeOut facilities">
                            <span><i class="fa-solid fa-cart-shopping"></i></span>
                            <span><i class="fa-solid fa-heart"></i></span>
                            <span><i class="fa-solid fa-arrow-right-from-bracket"></i></span>
                            <span><i class="fa-solid fa-eye"></i></span>
                        </div>
                    </div>`
           // pass them to the container of them
           
           container.innerHTML += content
        })
    })
    .catch((err) => {
        console.log(err);
    })  
     
    
}