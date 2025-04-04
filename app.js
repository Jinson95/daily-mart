const products = [
  { id: 1, name: "Basmati Rice (5kg)", price: 650, image: "https://via.placeholder.com/150?text=Rice" },
  { id: 2, name: "Full Cream Milk (1L)", price: 60, image: "https://via.placeholder.com/150?text=Milk" },
  { id: 3, name: "Red Apples (1kg)", price: 150, image: "https://via.placeholder.com/150?text=Apples" },
  { id: 4, name: "Bananas (1 dozen)", price: 50, image: "https://via.placeholder.com/150?text=Bananas" },
  { id: 5, name: "Tomatoes (1kg)", price: 40, image: "https://via.placeholder.com/150?text=Tomatoes" },
  { id: 6, name: "Potatoes (2kg)", price: 60, image: "https://via.placeholder.com/150?text=Potatoes" },
  { id: 7, name: "Onions (1kg)", price: 45, image: "https://via.placeholder.com/150?text=Onions" },
  { id: 8, name: "Olive Oil (1L)", price: 850, image: "https://via.placeholder.com/150?text=Olive+Oil" },
  { id: 9, name: "Sunflower Oil (1L)", price: 160, image: "https://via.placeholder.com/150?text=Sunflower+Oil" },
  { id: 10, name: "Turmeric Powder (200g)", price: 80, image: "https://via.placeholder.com/150?text=Turmeric" },
  { id: 11, name: "Chili Powder (200g)", price: 90, image: "https://via.placeholder.com/150?text=Chili+Powder" },
  { id: 12, name: "Coriander Powder (200g)", price: 85, image: "https://via.placeholder.com/150?text=Coriander+Powder" },
];

let cartCount = 0;

function renderProducts() {
  const productList = document.getElementById("product-list");

  products.forEach((product) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>₹${product.price.toFixed(2)}</p>
      <button onclick="addToCart()">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;
}

renderProducts();

