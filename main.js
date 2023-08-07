import { person } from "./domain/person.js";
import { product } from "./domain/product.js";
import { getTotalPrice } from "./fn/product-fn.js";
import { deleteNonConfigurable } from "./fn/delete-configurable-fn.js";
import { bankAccount } from "./domain/bank-account.js";
import { transfer } from "./fn/bank-transfer-fn.js";
import { createImmutableObject } from "./fn/immutable-fn.js";
import { observeObject } from "./fn/observe-fn.js";
import { deepCloneObject, widthDeepClone } from "./fn/deep-clone-fn.js";
import { schema, schemaProperty, allPropertiesWritable } from "./domain/schema.js";
import { validateObject } from "./fn/validate-fn.js";

person.updateInfo({firstName: "Anna"});
console.log(Object.getOwnPropertyDescriptors(person));
console.log(Object.getOwnPropertyDescriptors(product));
console.log(Object.keys(product));
console.log(getTotalPrice(product));
deleteNonConfigurable(product, "name");
console.log(Object.getOwnPropertyDescriptors(product));
Object.defineProperty(product, "d", {value: "ffff"});
console.log(Object.getOwnPropertyDescriptors(product));
console.log(bankAccount.formattedBalance);
bankAccount.balance = 2000
console.log(bankAccount.formattedBalance);
const currentAccount = {
    _balance: 3300,
    set balance(value) {
        this._balance = value;
    },    
    get formattedBalance() {
        return "$" + this._balance;
    },
};
transfer(currentAccount, bankAccount, 600);
console.log(currentAccount.formattedBalance);
console.log(bankAccount.formattedBalance);

const immutableObj = createImmutableObject(person);
console.log(Object.getOwnPropertyDescriptors(immutableObj));

observeObject(person, (str) => {console.log(str)});
console.log(person.email);
console.log(person.firstName);
console.log(person.lastName);

let user = {};
user.name = "kkkk";
console.log(user.name);
const clone = deepCloneObject(user);
clone.name = "aaaa";
console.log(clone.name);
console.log(user.name);

schema.requiredProperties.push(new schemaProperty("name", "string"));
schema.rules.push(allPropertiesWritable);

console.log(validateObject(person, schema));
console.log(validateObject(user, schema));

const n = [1,4,5,6,8,9];
const klone = widthDeepClone(n);

console.log(klone);
klone[1] = 100000;
console.log(n);
console.log(klone);

const a = {
    b: 1,
    c: [{c:3},2,3,4],
    f: {
        h: 1,
        k: {
            kk: 10
        }
    }
}

const aklone = widthDeepClone(a);
console.log(Object.getOwnPropertyDescriptors(aklone));
aklone.b = 100000;
aklone.c[2] = 100000;
aklone.f.h = 393939;
console.log(Object.getOwnPropertyDescriptors(a));
console.log(Object.getOwnPropertyDescriptors(aklone));
console.log(a);
console.log(aklone);



