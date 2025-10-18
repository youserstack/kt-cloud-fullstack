const products = [
    {
        id: 1,
        name: "Product 1",
        price: 10.00,
        image: "https://via.placeholder.com/250"
    },
    {
        id: 2,
        name: "Product 2",
        price: 15.00,
        image: "https://via.placeholder.com/250"
    },
    {
        id: 3,
        name: "Product 3",
        price: 20.00,
        image: "https://via.placeholder.com/250"
    },
    {
        id: 4,
        name: "Product 4",
        price: 25.00,
        image: "https://via.placeholder.com/250"
    }
];

const productGrid = document.querySelector(".product-grid");

products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button>Add to Cart</button>
    `;
    productGrid.appendChild(productCard);
});