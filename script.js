const products = [
  { id: 1, name: "Product 1", price: 100, image: "https://via.placeholder.com/150", description: "Description for product 1." },
  { id: 2, name: "Product 2", price: 150, image: "https://via.placeholder.com/150", description: "Description for product 2." },
  { id: 3, name: "Product 3", price: 200, image: "https://via.placeholder.com/150", description: "Description for product 3." },
  { id: 4, name: "Product 4", price: 250, image: "https://via.placeholder.com/150", description: "Description for product 4." },
  { id: 7, name: "Product 7", price: 400, image: "https://via.placeholder.com/150", description: "Description for product 7." },  
  { id: 5, name: "Product 5", price: 300, image: "https://via.placeholder.com/150", description: "Description for product 5." },
  { id: 6, name: "Product 6", price: 350, image: "https://via.placeholder.com/150", description: "Description for product 6." },
];

const loadFeaturedProducts = () => {
  const featuredDiv = document.getElementById('featured-products');
  products.slice(0, 3).forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card';
      productCard.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>Price: ₹ ${product.price}</p>
          <a href="product-detail.html?id=${product.id}">View Details</a>
      `;
      featuredDiv.appendChild(productCard);
  });
};

const loadProductList = () => {
  const productListDiv = document.getElementById('product-list');
  products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card';
      productCard.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>Price: ₹ ${product.price}</p>
          <a href="product-detail.html?id=${product.id}">View Details</a>
      `;
      productListDiv.appendChild(productCard);
  });
};

const loadProductDetail = () => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');
  const product = products.find(p => p.id == productId);
  const productDetailDiv = document.getElementById('product-detail');
  if (product) {
      productDetailDiv.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
            <div id=product-detail-div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: ₹ ${product.price}</p>
            <button id="add-to-cart">Add to Cart</button>
          </div>  
      `;
      document.getElementById('add-to-cart').addEventListener('click', () => {
      window.location.href = "checkout.html";
      });
  }
};

const Pay = () => {
  const isSuccess = Math.random() >= 0.5;
  const status = isSuccess ? 'success' : 'failure';
  window.location.href = `payment-status.html?status=${status}`;
};


const handleCheckout = (event) => {
  event.preventDefault();
  Pay();
};


document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('featured-products')) loadFeaturedProducts();
  if (document.getElementById('product-list')) loadProductList();
  if (document.getElementById('product-detail')) loadProductDetail();
  if (document.getElementById('checkout-form')) {
      document.getElementById('checkout-form').addEventListener('submit', handleCheckout);
  }
});
