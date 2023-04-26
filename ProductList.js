// Get the product list from the API
fetch('https://crudcrud.com/api/16dec9d93c764985a779f9989c564322/products')
	.then(response => response.json())
	.then(products => {
		// Display the product list
		const productList = document.querySelector('#product-list');
		productList.innerHTML = '';

		products.forEach(product => {
			const productItem = document.createElement('div');
			productItem.innerHTML = `
				<p>${product.name}</p>
				<p>${product.price}</p>
				<button data-id="${product._id}" class="delete-product">Delete</button>
			`;

			productList.appendChild(productItem);
		});

		// Add event listener to delete buttons
		const deleteButtons = document.querySelectorAll('.delete-product');
		deleteButtons.forEach(button => {
			button.addEventListener('click', (event) => {
				const productId = event.target.dataset.id;

				fetch(`https://crudcrud.com/api/16dec9d93c764985a779f9989c564322/products/${productId}`, {
					method: 'DELETE'
				}).then(() => {
					// Refresh the page
					location.reload();
				});
			});
		});
	});

// Add event listener to the "Add Product" form
const addProductForm = document.querySelector('#add-product-form');
addProductForm.addEventListener('submit', (event) => {
	event.preventDefault();

	// Get the form values
	const productName = document.querySelector('#product-name').value;
	const productPrice = document.querySelector('#product-price').value;

	// Create a new product object
	const newProduct = {
		name: productName,
		price: productPrice
	};

	// Add the new product to the API
	fetch('https://crudcrud.com/api/16dec9d93c764985a779f9989c564322/products', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(newProduct)
	}).then(() => {
		// Refresh the page
		location.reload();
	});
});
