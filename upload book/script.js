if(localStorage.getItem("ID_Of_book") !== null){
    dealWithExistingBook();
}

else{
    document.getElementById("submitBTN").addEventListener("click", (e) => {
       UploadBook(); 
    }); 
    
}

async function uploadBook() {
    let today = new Date();
    let year = today.getFullYear();
    let month = String(today.getMonth() + 1).padStart(2, '0');
    let day = String(today.getDate()).padStart(2, '0');
    let formattedDate = `${year}-${month}-${day}`;

    if (title.value && author.value && description.value && originalPrice.value && discountedPrice.value && coverImageUrl.value && stock.value && brand.value) {
        // if (/^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(coverImageUrl.value)) {
            let dataForm = {
                title: title.value,
                author: author.value,
                description: description.value,
                originalPrice: parseFloat(originalPrice.value),
                discountedPrice: parseFloat(discountedPrice.value),
                coverImageUrl: coverImageUrl.value,
                // moreImages: Array.from(additionalImages.files),
                stock: parseInt(stock.value, 10),
                publicationDate: formattedDate,
                brand: brand.value
            };
            console.table('data form ',dataForm);
            
            try {
                let fetchAPI = await fetch("https://e-books-mu.vercel.app/books/add",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(dataForm)
                    }
                )
                let response = await fetchAPI.json()
                if (fetchAPI.ok) {
                    
                    alert("The book has been successfully added!");                    // console.log(response)
                    title.value = ""
                    author.value = ""
                    description.value = ""
                    originalPrice.value = ""
                    discountedPrice.value = ""
                    coverImageUrl.value = ""
                    stock.value = ""
                    brand.value = ""
                    additionalImages.value = ""
                } else {
                    alert(`Error adding book : ${fetchAPI.status}`)

                }
            } catch (error) {
                alert("Network error: Could not complete the request.");
                console.error("Error:", error);
            }
        // } else {
        //     alert("Invalid URL format for the cover image. Please use a valid image URL (jpg, png, etc.)");

        // }
    } else {
        alert("Please fill all the fields");
    }
}



// update senario

async function dealWithExistingBook(){
    console.log(localStorage.getItem("ID_Of_book"))
    let data = await get_book(localStorage.getItem("ID_Of_book"));
    console.log(data);
    write_book(data);
    document.getElementById("submitBTN").addEventListener("click", (e) => {
        updateBook(data._id); // send data in body of request
        localStorage.removeItem("ID_Of_book");
      
    });
}
async function updateBook(id) {
    let today = new Date();
    let year = today.getFullYear();
    let month = String(today.getMonth() + 1).padStart(2, '0');
    let day = String(today.getDate()).padStart(2, '0');
    let formattedDate = `${year}-${month}-${day}`;

    if (title.value && author.value && description.value && originalPrice.value && discountedPrice.value && coverImageUrl.value && stock.value && brand.value) {
        // if (/^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(coverImageUrl.value)) {
            let dataForm = {
                title: title.value,
                author: author.value,
                description: description.value,
                originalPrice: parseFloat(originalPrice.value),
                discountedPrice: parseFloat(discountedPrice.value),
                coverImageUrl: coverImageUrl.value,
                // moreImages: Array.from(additionalImages.files),
                stock: parseInt(stock.value, 10),
                publicationDate: formattedDate,
                brand: brand.value
            };
            console.table('data form ',dataForm);
            
            try {
                let fetchAPI = await fetch(`https://assiutrobotics.github.io/E-books/books/update/${id}`,
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(dataForm)
                    }
                )
                let response = await fetchAPI.json()
                if (fetchAPI.ok) {
                    
                    alert("The book has been successfully updated!");                    // console.log(response)
                    title.value = ""
                    author.value = ""
                    description.value = ""
                    originalPrice.value = ""
                    discountedPrice.value = ""
                    coverImageUrl.value = ""
                    stock.value = ""
                    brand.value = ""
                    additionalImages.value = ""
                    window.location.href = "../myProduct/index.html";
                } else {
                    alert(`Error adding book : ${fetchAPI.status}`)

                }
            } catch (error) {
                alert("Network error: Could not complete the request.");
                console.error("Error:", error);
            }
    } 
    else {
        alert("Please fill all the fields");
    }

}

async function get_book(id){
    let url = 'https://e-books-mu.vercel.app/books/get/';
    console.log(url + id);
    try {
        const response = await fetch(url + id);
        const result = await response.json();
        return result.data;
    } catch (err) {
        console.log(err);
        return null;
    }
    
}
function write_book(data){
    const form = document.getElementsByTagName("form")[0];
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const originalPrice = document.getElementById("originalPrice");
    const discountedPrice = document.getElementById("discountedPrice");
    const description = document.getElementById("description");
    const brand = document.getElementById("brand");
    const tags = document.getElementById("tags");
    const coverImageFiles = document.getElementById("coverImage");
    form.method = "EDIT";
    title.value = data.title;
    author.value = data.author;
    originalPrice.value = data.originalPrice;
    discountedPrice.value = data.discountedPrice;
    description.value = data.description;
    brand.value = data.brand;
    tags.value = data.tags;
    // coverImageFiles.value = data.coverImage;
    // coverImageFiles.value = data.coverImage;
}