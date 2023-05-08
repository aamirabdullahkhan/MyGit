const apiUrl = 'https://crudcrud.com/api/0be609953a1d4e5ebc808401c403f1d2/products';

const productList = document.getElementById('product-list');
const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const totalCostElement = document.getElementById('total-cost');

let products = [];

function updateProductList() {
  productList.innerHTML = '';
  products.forEach((product, index) => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    nameCell.textContent = product.name;
    const priceCell = document.createElement('td');
    priceCell.textContent = product.price;
    const actionsCell = document.createElement('td');
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
      editProduct(index);
    });
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      deleteProduct(index);
    });
    actionsCell.appendChild(editButton);
    actionsCell.appendChild(deleteButton);
    row.appendChild(nameCell);
    row.appendChild(priceCell);
    row.appendChild(actionsCell);
    productList.appendChild(row);
  });
  updateTotalCost();
}

function addProduct() {
  const name = productNameInput.value;
  const price = parseFloat(productPriceInput.value);
  if (name && price) {
    const product = { name, price };
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
      .then(response => response.json())
      .then(data => {
        products.push(data);
        updateProductList();
      })
      .catch(error => {
        console.error('Error adding product:', error);
      });
    productNameInput.value = '';
    productPriceInput.value = '';
  }
}

function editProduct(index) {
  const product = products[index];
  const newName = prompt('Enter new name:', product.name);
  const newPrice = parseFloat(prompt('Enter new price:', product.price));
  if (newName && newPrice) {
    const newProduct = { ...product, name: newName, price: newPrice };
    fetch(`${apiUrl}/${product._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    })
      .then(response => response.json())
      .then(data => {
        products[index] = data;
        updateProductList();
      })
      .catch(error => {
        console.error('Error updating product:', error);
      });
  }
}

function deleteProduct(index) {
  const product = products[index];
  fetch(`${apiUrl}/${product._id}`, {
    method: 'DELETE'
  })
    .then(() => {
      products.splice(index, 1);
      updateProductList();
    })
    .catch(error => {
      console.error('Error deleting product:', error);
    });
}

function updateTotalCost() {
  const totalCost = products.reduce((acc, product) => acc + product.price, 0);
  totalCostElement.textContent = totalCost.toFixed(2);
}

addProductButton.addEventListener('click', addProduct);

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    products = data;
    updateProductList();
  })
  .catch(error => {
    console.error('Error fetching products:', error);
  });
