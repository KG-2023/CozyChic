const products = [
	{
		name: 'Product 1',
		price: 21,
		description: 'This is the description for Product 1',
		imageUrl: 'https://github.com/suengit6/activity-images/blob/03b265a1b02fef5303267a32f751be488c177ed0/products/img_product_01.jpeg?raw=true',
	},
	{
		name: 'Product 2',
		price: 31,
		description: 'This is the description for Product 2',
		imageUrl: 'https://github.com/suengit6/activity-images/blob/03b265a1b02fef5303267a32f751be488c177ed0/products/img_product_02.jpeg?raw=true',
	},
	{
		name: 'Product 3',
		price: 55,
		description: 'This is the description for Product 3',
		imageUrl: 'https://github.com/suengit6/activity-images/blob/03b265a1b02fef5303267a32f751be488c177ed0/products/img_product_03.jpeg?raw=true',
	},
	{
		name: 'Product 4',
		price: 34,
		description: 'This is the description for Product 4',
		imageUrl: 'https://github.com/suengit6/activity-images/blob/main/35D1F08F-F01A-4488-8E35-2C960A8181A4.jpeg?raw=true',
	},
	{
		name: 'Product 5',
		price: 23,
		description: 'This is the description for Product 5',
		imageUrl: 'https://github.com/suengit6/activity-images/blob/main/7BEC8DCC-C217-4E4D-A515-AD64279011CA.jpeg?raw=true',
	},
	{
		name: 'Product 6',
		price: 68,
		description: 'This is the description for Product 6',
		imageUrl: 'https://github.com/suengit6/activity-images/blob/main/76403267-333A-4EFF-A9BF-4889E6A2A4F0.jpeg?raw=true',
	}
];

const customCarouselInner = document.querySelector('.custom-carousel-inner');

for (let i = 0; i < products.length; i += 3) {
  const carouselItem = document.createElement('div');
  carouselItem.className = 'carousel-item custom-carousel-item';
  if (i === 0) {
    carouselItem.classList.add('active');
  }

  const innerCustomCarousel = document.createElement('div');
  innerCustomCarousel.className = 'custom-carousel-inner';

  for (let j = i; j < i + 3 && j < products.length; j++) {
    const product = products[j];

    const customCard = document.createElement('div');
    customCard.className = 'custom-card';

    const productLink = document.createElement('a');
    productLink.href = '#';

    const productImage = document.createElement('img');
    productImage.src = product.imageUrl;
    productImage.className = 'card-img-top';
    productImage.alt = product.name;

    productLink.appendChild(productImage);
    customCard.appendChild(productLink);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = product.name;

    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = product.price;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);

    customCard.appendChild(cardBody);
    innerCustomCarousel.appendChild(customCard);
  }

  carouselItem.appendChild(innerCustomCarousel);
  customCarouselInner.appendChild(carouselItem);
}