const product = {
    name: "Laptop",
    price: 1000,
    quantity: 5
};

Object.defineProperties(product, {
    name: {
        writable: false,
        enumerable: false
    },
    price: {
        writable: false,
        enumerable: false
    },
    quantity: {
        writable: false,
        enumerable: false
    },
});

export {product};