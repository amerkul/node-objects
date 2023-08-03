const observeObject = (obj, callback) => {
    if (typeof obj !== "object" || obj === null) {
        return new Error("Parameter (obj) is not an object");
    }
    const observer = {
        observe: callback,
        observeObject: function(obj) {
            let _this = this;
            const propertyNames = Object.getOwnPropertyNames(obj);
            for (let name of propertyNames) {
                if (Object.getOwnPropertyDescriptor(obj, name).configurable) {
                    let property = obj[name];
                    Object.defineProperty(obj, name, {
                        get: function() {
                            _this.observe(`Get a (${name}) property`);
                            return property;
                        },
                        set: function(value) {
                            property = value;
                            _this.observe(`Set a new value for a (${name}) property`);
                        },
                    });
                }
            }
        }
    };
    observer.observeObject(obj);
}

export {observeObject};