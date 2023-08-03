const bankAccount = {
    _balance: 1000,
    set balance(value) {
        this._balance = value;
    },    
    get formattedBalance() {
        return "$" + this._balance;
    },
};

export {bankAccount};