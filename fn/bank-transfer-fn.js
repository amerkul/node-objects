const transfer = (currentAccount, targetAccount, amount) => {
    if (currentAccount._balance < amount) {
        throw new Error("Not enough money");
    }
    currentAccount.balance = currentAccount._balance - amount;
    targetAccount.balance = targetAccount._balance + amount;
}

export {transfer};