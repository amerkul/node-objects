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

const widthDeepClone = (obj) => {
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }
    const clone = Array.isArray(obj) ? [] : {};
    const queue = Object.getOwnPropertyNames(obj);
    while(queue.length !== 0) {
        let path = queue.shift();
        let paths = path.split(".");
        let property = paths.pop();
        let current = obj;
        for (let path of paths) {
            current = current[path];
        }
        let descriptor = Object.getOwnPropertyDescriptor(current, property);
        if (typeof current[property] === "object" && current[property] !== null) {
            descriptor.value = Array.isArray(current[property]) ? [] : {};
            let properties = Object.getOwnPropertyNames(current[property])
            .map((value) => [path, value].join("."));
            queue.push(...properties);
        }
        current = clone;
        for (let path of paths) {
            current = current[path];
        }
        defineNewProperty(current, property, descriptor);
    }
    return clone;
}
export {deepCloneObject, widthDeepClone};