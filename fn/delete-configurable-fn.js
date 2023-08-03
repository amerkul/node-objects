const deleteNonConfigurable = (obj, propertyName) => {
    if (typeof propertyName !== "string") {
        throw new Error("PropertyName is not a string value");
    }
    if (typeof obj !== "object"
    || obj === null || Array.isArray(obj)) {
        throw new Error("Invalid obj");
    }
    if (obj[propertyName] !== undefined) {
        const descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
        if (descriptor.configurable === false) {
            throw new Error(`Unable to delele ${propertyName}. Configurable is false.`);
        }
        delete obj[propertyName];
    }
}

export {deleteNonConfigurable};