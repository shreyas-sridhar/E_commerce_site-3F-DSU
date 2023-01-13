function calculateTotal(prices) {
    let total = 0;
    for (let i = 0; i < prices.length; i++) {
        total += prices[i];
    }
    return total;
}

let itemPrices = [19.99, 29.99, 39.99];
let totalPrice = calculateTotal(itemPrices);
document.write(totalPrice); // Output: 89.97
