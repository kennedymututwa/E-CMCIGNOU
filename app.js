// Simple mockup of products
const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 }
];

let cart = [];

function renderProducts() {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = "";

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productElement);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartLink();
}

function updateCartLink() {
    const cartLink = document.getElementById('cartLink');
    cartLink.innerText = `Go to Cart (${cart.length} items)`;
}

document.addEventListener('DOMContentLoaded', renderProducts);
