const defineImmutableProperty = (result, propertyName, objValue) => {
    Object.defineProperty(
        result, 
        propertyName,
        {
            value: objValue,
            writable: false,
            configurable: false,
            enumerable: true,
        }
    );
}

const defineImmutablePrimitiveOrObjectProperty = (fn, item, propertyName, result) => {
    if (typeof item === "object" && item != null) {
        defineImmutableProperty(result, propertyName, fn(item));
    } else {
        defineImmutableProperty(result, propertyName, item);
    }
}

const createImmutableObject = function create(obj) {
    if (typeof obj !== "object" || obj === null) {
        return new Error("Argument is not an object");
    }
    let result = Array.isArray(obj) ? [] : {};
    const propertyNames = Object.getOwnPropertyNames(obj);
    if (Array.isArray(obj)) {
        propertyNames.pop();
    } 
    for (let i = 0; i < propertyNames.length; i++) {
        defineImmutablePrimitiveOrObjectProperty(
            create, obj[propertyNames[i]], propertyNames[i], result
        );
    }
    return result;
}

export {createImmutableObject};