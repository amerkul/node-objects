const validateObject = (obj, schema) => {
    return schema.fitToProperties(obj) && schema.fitToRules(obj)
}

export {validateObject};