function uploadBook() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const originalPrice = document.getElementById("originalPrice").value;
    const discountedPrice = document.getElementById("discountedPrice").value;
    const description = document.getElementById("description").value;
    const brand = document.getElementById("brand").value;
    const tags = document.getElementById("tags").value;
    const coverImageFiles = document.getElementById("coverImage").files;
  
    const bookData = {
        title,
        author,
        originalPrice,
        discountedPrice,
        description,
        brand,
        tags,
    };

    let books = JSON.parse(localStorage.getItem("uploadedBooks")) || [];

    books.push(bookData);

    localStorage.setItem("uploadedBooks", JSON.stringify(books));

    document.getElementById("uploadForm").reset();
}
