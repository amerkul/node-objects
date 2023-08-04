const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
    updateInfo: function (infoObject) {
        if (typeof infoObject !== "object" 
        || infoObject === null
        || Array.isArray(infoObject)) {
            throw new Error("Invalid infoObject");
        }
        for (let key of Object.getOwnPropertyNames(infoObject)) {
            if (typeof this[key] !== undefined && this[key].writable) {
                this[key] = infoObject[key];
            }
        }
    },
};

Object.defineProperties(person, {
    firstName: {writable: false},
    lastName: {writable: false},
    age: {writable: false},
    email: {writable: false}
});

Object.defineProperty(person, "address", {
    value: {},
    writable: true,
    enumerable: false,
    configurable: false,
});

export {person};

