// productInteraction function is another Immediately Invoked Function Expression (IIFE).
const productInteraction = function () {
    // Variable declarations for elements and product data.
    let $img, $name, $price, $description;
    let localStorageProduct;

    // Function to initialize variables with references to DOM elements.
    const initVariable = () => {
        $img = $('.product-image-img');
        $name = $('.product-name');
        $price = $('.product-price');
        $description = $('.product-description');
    }

    // Function to initialize product details based on the 'id' parameter from the URL.
    const initProduct = () => {
        // Get the 'id' parameter from the URL query string.
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');

        // Get the product data from the local storage based on the 'id'.
        // The 'id' corresponds to the index of the product in the stored array.
        localStorageProduct = JSON.parse(localStorage.getItem('products'))[id];

        // Set the product image, name, price, and description on the webpage.
        $img.attr('src', localStorageProduct['image']);
        $name.text(localStorageProduct['name']);
        $price.text(`$${localStorageProduct['price']}`);
        $description.text(localStorageProduct['description']);
    };

    // Public API: Expose the init method to initialize the product details on the webpage.
    return {
        init: function () {
            initVariable();
            initProduct();

            console.log(localStorageProduct); // Log the product data to the console for reference.
        }
    }
}();

// jQuery code to run the productInteraction.init() function after the document has been fully loaded.
$(document).ready(function () {
    productInteraction.init();
});
