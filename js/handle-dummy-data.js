// The productsData function is an Immediately Invoked Function Expression (IIFE).
const productsData = function () {
    let $productsGallery; // Variable to store the reference to the products gallery element

    // Array containing product information
    const PRODUCT_LIST = [
        {
            name: 'Product 1',
            price: 21,
            description: 'This is the description for Product 1',
            image: 'https://github.com/suengit6/activity-images/blob/03b265a1b02fef5303267a32f751be488c177ed0/products/img_product_01.jpeg?raw=true',
        },
        {
            name: 'Product 2',
            price: 31,
            description: 'This is the description for Product 2',
            image: 'https://github.com/suengit6/activity-images/blob/03b265a1b02fef5303267a32f751be488c177ed0/products/img_product_02.jpeg?raw=true',
        },
        {
            name: 'Product 3',
            price: 55,
            description: 'This is the description for Product 3',
            image: 'https://github.com/suengit6/activity-images/blob/03b265a1b02fef5303267a32f751be488c177ed0/products/img_product_03.jpeg?raw=true',
        },
        {
            name: 'Product 4',
            price: 34,
            description: 'This is the description for Product 4',
            image: 'https://github.com/suengit6/activity-images/blob/main/35D1F08F-F01A-4488-8E35-2C960A8181A4.jpeg?raw=true',
        },
        {
            name: 'Product 5',
            price: 23,
            description: 'This is the description for Product 5',
            image: 'https://github.com/suengit6/activity-images/blob/main/7BEC8DCC-C217-4E4D-A515-AD64279011CA.jpeg?raw=true',
        },
        {
            name: 'Product 6',
            price: 68,
            description: 'This is the description for Product 6',
            image: 'https://github.com/suengit6/activity-images/blob/main/76403267-333A-4EFF-A9BF-4889E6A2A4F0.jpeg?raw=true',
        }
    ];

    // Function to initialize local storage with product data
    const handleInitLocalStoreProduct = () => {
        // Logging the PRODUCT_LIST for reference
        console.log(JSON.parse(JSON.stringify(PRODUCT_LIST)));

        // Check if 'products' key does not exist in the local storage
        if (!localStorage.getItem('products')) {
            // If 'products' key doesn't exist, store the PRODUCT_LIST data as a JSON string
            localStorage.setItem('products', JSON.stringify(PRODUCT_LIST));
        } else {
            // If 'products' key already exists, remove it and then store the PRODUCT_LIST data again
            localStorage.removeItem('products');
            localStorage.setItem('products', JSON.stringify(PRODUCT_LIST));
        }

        // Retrieve data from local storage and check if it has at least one product
        let data = JSON.parse(localStorage.getItem('products'));

        if (data && data.length > 0) {
            console.log(data[0]); // Log the first product's information from local storage
        } else {
            console.log('No products in localStorage.');
        }
    }

    // Function to dynamically render product information on the webpage
    const handleRenderProduct = () => {
        $productsGallery = document.querySelector('#products-gallery');

        let listHtml = [];

        // Loop through each product in the PRODUCT_LIST array
        PRODUCT_LIST.forEach((val, index) => {
            // Generate the HTML for each product item
            let containerHtml = `
            <li class="col-md-4">
                <a href="product.html?id=${index}" target="_blank" >
                    <div class="thumbnail text-center">
                        <img
                            class="product__pic1 my-5"
                            src="${val.image}"
                            loading="eager"
                        />
                        <div class="caption">
                            <h2>$${val.price} - ${val.name}</h2>
                            <p>
                                ${val.description}
                            </p>
                        </div>
                    </div>
                </a>
            </li>`;

            // Add the generated HTML for this product to the listHtml array
            listHtml.push(containerHtml);
        });

        // Join all the product HTML elements together and set them as the content of the productsGallery element
        $productsGallery.innerHTML = listHtml.join(' ');
    }

    // Public API: Expose the init method to initialize the product data and render it on the webpage
    return {
        init: function () {
            handleInitLocalStoreProduct();
            handleRenderProduct();
        }
    }
}();

// jQuery code to run the productsData.init() function after the document has been fully loaded
$(document).ready(function () {
    productsData.init();
});
