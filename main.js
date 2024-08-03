// main.js
const Product = require('./Product');
const ShoppingCart = require('./ShoppingCart');

// Create products
const apple = new Product(1, 'Apple', 1.00);
const banana = new Product(2, 'Banana', 0.50);
const orange = new Product(3, 'Orange', 0.75);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(apple, 3); // 3 apples
cart.addItem(banana, 5); // 5 bananas
cart.addItem(orange, 2); // 2 oranges

// Display the cart
console.log('Cart after adding items:');
cart.displayCart();

// Remove an item from the cart
cart.removeItem(2); // Remove bananas

// Display the cart after removal
console.log('\nCart after removing bananas:');
cart.displayCart();
