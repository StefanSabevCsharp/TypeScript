function findLowestPrice(townArray) {
    const productInfo = new Map();
    for (const line of townArray) {
        let [townName, productName, productPrice] = line.split("|");
        let price = Number(productPrice);
        if (!productInfo.has(productName)) {
            productInfo.set(productName, { price: price, town: townName });
        }
        else {
            let currentProduct = productInfo.get(productName);
            if (price < currentProduct.price) {
                currentProduct.price = price;
                currentProduct.town = townName;
            }
        }
    }
    productInfo.forEach((value, productName) => {
        console.log(`${productName} -> ${value.price} (${value.town})`);
    });
}
findLowestPrice([
    "Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 1",
    "Sofia | Orange | 3",
    "Sofia | Peach | 2",
    "New York | Sample Product | 1000.1",
    "New York | Burger | 10",
]);
