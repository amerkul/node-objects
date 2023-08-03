const getTotalPrice = (product) => {
    if (typeof product !== "object" 
        || product === null
        || Array.isArray(product)) {
            throw new Error("Invalid product");
    }
    if (typeof product.price !== "number" 
    || isNaN(product.price) ) {
        throw new Error("Price is not a number");
    }
    if (typeof product.quantity !== "number" 
    || isNaN(product.quantity) ) {
        throw new Error("Quantity is not a number");
    }
    return product.price * product.quantity;
}

export {getTotalPrice};