class CreateAccount {
    bankName;
    bankID;
    constructor(bankName, bankID) {
        this.bankName = bankName;
        this.bankID = bankID;
    }
}
class PersonalAccount extends CreateAccount {
    ownerName;
    money = 0;
    recentTransactions = {};
    constructor(bankName, bankID, ownerName) {
        super(bankName, bankID.toString());
        this.ownerName = ownerName;
    }
    deposit(amount) {
        this.money += amount;
    }
    expense(amount, expenseType) {
        if (this.money >= amount) {
            this.money -= amount;
            if (!this.recentTransactions[expenseType]) {
                this.recentTransactions[expenseType] = 0;
            }
            this.recentTransactions[expenseType] += amount;
        }
        else {
            throw new Error(`You cant make ${expenseType} transaction`);
        }
    }
    showDetails() {
        const allExpenses = Object.values(this.recentTransactions)
            .reduce((a, b) => a + b, 0);
        let result = `Bank name: ${this.bankName}\n`;
        result += `Bank ID: ${this.bankID}\n`;
        result += `Owner name: ${this.ownerName}\n`;
        result += `Money: ${this.money}\n`;
        result += `Money spent: ${allExpenses}\n`;
        return result;
    }
}
let account = new PersonalAccount('DSK', 101240, 'Ivan Ivanov');
account.deposit(1000);
account.deposit(1000);
account.expense(700, 'Buy new phone');
account.expense(400, 'Book a vacation');
account.expense(400, 'Book a vacation');
account.expense(100, 'Buy food');
console.log(account.showDetails());
//# sourceMappingURL=4.Bank.js.map