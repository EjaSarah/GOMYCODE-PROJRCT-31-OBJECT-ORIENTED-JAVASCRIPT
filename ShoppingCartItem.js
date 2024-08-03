// ShoppingCartItem.js
const Product = require('./Product');

class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    // Method to calculate total price of this item
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

module.exports = ShoppingCartItem;
