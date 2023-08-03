const schemaProperty = function(propertyName, type) {
    this.propertyName = propertyName
    this.type = type
}

const allPropertiesWritable = (obj) => {
    let descriptors = Object.getOwnPropertyDescriptors(obj);
    for (let item in obj) {
        if (!descriptors[item].writable) {
            return false
        }
    }
    return true;
}

const schema = {
    requiredProperties: [],
    rules: [],
    fitToRules: function(obj) {
        let result = false;
        for (let fn of this.rules) {
            if (typeof fn !== "function") {
                throw new Error(`${fn} is not a function`)
            }
            if(!fn(obj)) {
                break;
            }
            result = true;
        }
        return result;
    },
    fitToProperties: function(obj) {
        let result = true;
        if (this.requiredProperties.length !== 0) {
            for (let item of this.requiredProperties) {
                if (!obj.hasOwnProperty(item.propertyName) 
                || typeof obj[item.propertyName] !== item.type)
                result = false;
                break;
            }
        }
       return result;
    }
}

export {schema, schemaProperty, allPropertiesWritable};