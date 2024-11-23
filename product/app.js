{
    let name = document.querySelector('#productName');
    
    let brand = document.querySelector('#brand');
    
    let availability = document.querySelector('#availability');
    
    let SKU = document.querySelector('#SKU');
    
    
    let current_price = document.querySelector('#current-price');
    let original_price = document.querySelector('#original-price');


    let mainImage = document.querySelector('#main-image');
    let subImages = Array.from(document.querySelectorAll('.sub-image img'));


    //fetch here
    {
        name.textContent ; // product name form fetch
        brand.textContent ; // product brand form fetch
        availability.textContent ; // product availability form fetch
        SKU.textContent ; // product SKU form fetch
        current_price.textContent ; // product current_price form fetch
        original_price.textContent ; // product original_price form fetch
        mainImage.src ; // product mainImage form fetch
        subImages.forEach((subImage, index) => {
            subImage.src ; // product subImage form fetch
        });
        
    }
}