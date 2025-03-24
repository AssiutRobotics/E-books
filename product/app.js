// Show loading spinner
document.getElementById('loading-spinner').classList.remove('hidden');
document.getElementById('content').classList.add('hidden');

{
    let name = document.querySelector('#productName');
    let brand = document.querySelector('#brand');
    let availability = document.querySelector('#availability');
    let SKU = document.querySelector('#SKU');
    let current_price = document.querySelector('.current-price');
    let original_price = document.querySelector('.original-price');
    let mainImage = document.querySelector('#mainImage');
    let subImages = Array.from(document.querySelectorAll('.more-img img'));

    let url = 'https://e-books-mu.vercel.app/books/get/';
    let id = localStorage.getItem('book');

    //fetch here
    console.log(url + id);

    fetch(url + id)
        .then(response => response.json())
        .then(data => data.data)
        .then(book => {
            // console.log(book.additionalImages);

            name.textContent = book.title; // product name from fetch
            brand.textContent = book.author; // product brand from fetch
            //availability.textContent = book.; // product availability from fetch
            //SKU.textContent = book.; // product SKU from fetch
            current_price.textContent = book.discountedPrice; // product current_price from fetch
            original_price.textContent = book.originalPrice; // product original_price from fetch
            mainImage.src = book.coverImageUrl; // product mainImage from fetch
            subImages.forEach((subImage, index) => {
                subImage.src = book.additionalImages[index]; // product subImage from fetch
            });

            // Hide loading spinner and show content
            document.getElementById('loading-spinner').classList.add('hidden');
            document.getElementById('content').classList.remove('hidden');
        })
        .catch(error => {
            console.log(error);
            // Hide loading spinner even if there is an error
            document.getElementById('loading-spinner').classList.add('hidden');
            document.getElementById('content').classList.remove('hidden');
        });
}

// make taps for images
{
    let mainImage = document.querySelector('#mainImage');
    let subImages = Array.from(document.querySelectorAll('.more-img img'));
    subImages.forEach(subImage => {
        subImage.addEventListener('click', () => {
            for (let image of subImages) {
                if (image.classList.contains('active')) {
                    image.classList.remove('active');
                }
            }
            mainImage.src = subImage.src;
            subImage.classList.add('active');
        });
    });
}