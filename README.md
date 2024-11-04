# E-Commerce Website

A simple mock eCommerce website built with HTML, CSS, and JavaScript. This project simulates an online shopping experience with product listings, product details, a checkout process, and a mock payment status page.

## Features

- **Homepage** with featured products.
- **Product Listing Page** displaying all available products.
- **Product Detail Page** for individual product information and the option to add to cart.
- **Checkout Page** that simulates the checkout process.
- **Payment Status Page** to show a mock success or failure message after payment.

## Project Structure

```
├── index.html                # Homepage
├── product-list.html         # Product Listing Page
├── product-detail.html       # Product Detail Page
├── checkout.html             # Checkout Page
├── payment-status.html       # Payment Status Page
├── style.css                 # CSS for styling
├── script.js                 # JavaScript for functionality
└── README.md                 # Project Documentation
```

## Installation and Setup

1. Clone the repository or download the project files.
2. Open `index.html` in a web browser to start browsing the website.

## Usage

1. **Homepage**: Displays three featured products. Click "View Details" to navigate to the product detail page.
2. **Product Listing Page**: Shows a list of all products. Click "View Details" to navigate to individual product pages.
3. **Product Detail Page**: Displays information about the selected product with an option to "Add to Cart."
4. **Checkout Page**: After clicking "Add to Cart," you'll be redirected here. Complete the checkout form and submit.
5. **Payment Status Page**: The checkout process simulates a random payment outcome (success or failure). The payment result will be displayed here.

## Code Overview

### `script.js`

- **Product Data**: Mock product data is stored in an array of objects.
- **Dynamic Content Loading**:
  - `loadFeaturedProducts()`: Loads featured products on the homepage.
  - `loadProductList()`: Loads all products on the product listing page.
  - `loadProductDetail()`: Displays the details of a specific product on the product detail page.
- **Checkout Process**:
  - `handleCheckout()`: Handles form submission on the checkout page and calls `Pay()`.
  - `Pay()`: Simulates a payment outcome and redirects to `payment-status.html` with the outcome as a query parameter.
- **Payment Status Display**:
  - Code in `payment-status.html` reads the query parameter to show either a "Payment Successful" or "Payment Failed" message.

### `payment-status.html`

Displays a message based on the payment status passed as a URL parameter. It reads the parameter and updates the DOM accordingly.

## Technologies Used

- **HTML**: Structure of the web pages.
- **CSS**: Styling for layout and design.
- **JavaScript**: Client-side functionality, mock API, dynamic content loading, and checkout/payment simulation.

## Future Enhancements

- Add actual cart functionality.
- Implement a real payment gateway.
- Add backend support with a database to manage inventory and orders.
- Add user authentication for login and signup.

## License

This project is open source and available for use 
