const defineNewProperty = (clone, propertyName, descriptor) => {
    Object.defineProperty(
        clone, 
        propertyName,
        descriptor
    );
}

const deepCloneObject = function cloneOject(obj) {
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }
    const clone = Array.isArray(obj) ? [] : {}
    const propertyNames = Object.getOwnPropertyNames(obj);
    if (Array.isArray(obj)) {
        propertyNames.pop();
    } 
    for (let i = 0; i < propertyNames.length; i++) {
        let property = propertyNames[i];
        let descriptor = Object.getOwnPropertyDescriptor(obj, property)
        if (typeof obj[property] === "object" && obj[property] != null) {
            const nested = cloneOject(obj[property]);
            descriptor.value = nested;
        }
        defineNewProperty(clone, property, descriptor);
    }
    return clone;
}

export {deepCloneObject};