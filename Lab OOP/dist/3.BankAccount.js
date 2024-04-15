class BankAccount {
    static _id = 1;
    id;
    _balance = 0;
    static _interestRate = 0.02;
    constructor() {
        this.id = BankAccount._id++;
    }
    setInterestRate(value) {
        BankAccount._interestRate = value;
    }
    getInterestRate() {
        return BankAccount._interestRate * this._balance;
    }
    deposit(value) {
        this._balance += value;
    }
}
class TestClient {
    bankAccount;
    create() {
        this.bankAccount = new BankAccount();
        console.log(`Account ID${this.bankAccount.id} created`);
    }
    deposit(id, amount) {
        if (!this.bankAccount) {
            console.log("No account created yet.");
            return;
        }
        this.bankAccount.deposit(amount);
        console.log(`Deposited ${amount} to ID${id}`);
    }
    setInterestRate(value) {
        if (!this.bankAccount) {
            console.log("No account created yet.");
            return;
        }
        this.bankAccount.setInterestRate(value);
    }
    getInterestRate(id, years) {
        if (!this.bankAccount) {
            console.log("No account created yet.");
            return;
        }
        let totalInterest = this.bankAccount.getInterestRate() * years;
        console.log(`Total interest for ID${id} after ${years} years: ${totalInterest}`);
    }
    end() {
        console.log("Goodbye");
    }
}
let testClient = new TestClient();
testClient.create();
testClient.deposit(1, 1000);
testClient.setInterestRate(0.03);
testClient.getInterestRate(1, 5);
testClient.end();
let test2 = new TestClient();
test2.create();
test2.deposit(2, 2000);
testClient.getInterestRate(1, 5);
test2.setInterestRate(2);
test2.getInterestRate(2, 5);
testClient.getInterestRate(1, 5);
test2.end();
//# sourceMappingURL=3.BankAccount.js.map