{
    let name = document.querySelector('#productName');
    
    let brand = document.querySelector('#brand');
    
    let availability = document.querySelector('#availability');
    
    let SKU = document.querySelector('#SKU');
    
    
    let current_price = document.querySelector('.current-price');
    let original_price = document.querySelector('.original-price');


    let mainImage = document.querySelector('#mainImage');
    let subImages = Array.from(document.querySelectorAll('.more-img img'));

    let url = 'https://e-books-production.up.railway.app/books/get/';
    let id = localStorage.getItem('book');
    
    //fetch here
    console.log(url + id);
    
    fetch(url + id) 
    .then(response => response.json())
    .then(data => {return data.data.book})
    .then(book => {
        console.log(book.additionalImages);
        
        name.textContent = book.title ; // product name form fetch
        brand.textContent  = book.author ; // product brand form fetch
        //availability.textContent  = book.; // product availability form fetch
        //SKU.textContent = book. ; // product SKU form fetch
        current_price.textContent = book.discountedPrice ; // product current_price form fetch
        original_price.textContent = book.originalPrice ; // product original_price form fetch
        mainImage.src = book.coverImageUrl; // product mainImage form fetch
        subImages.forEach((subImage, index) => {
            subImage.src = book.additionalImages[index] ; // product subImage form fetch
        });
        
    })
    .catch(error => {
        console.log(error);
    });
}
// make taps for images
{
    let mainImage = document.querySelector('#mainImage');
    let subImages = Array.from(document.querySelectorAll('.more-img img'));
    subImages.forEach(subImage => {
        subImage.addEventListener('click', () => {
            for(let image of subImages) {
                if(image.classList.contains('active'))
                    {image.classList.remove('active');}
            }
            mainImage.src = subImage.src;
            subImage.classList.add('active');
        });
    });
}