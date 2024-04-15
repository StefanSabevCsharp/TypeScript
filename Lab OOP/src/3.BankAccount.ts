class BankAccount {
    private static _id: number = 1;
    public readonly id: number;
    private _balance: number = 0; 
    private static _interestRate: number = 0.02;

    constructor() {
        this.id = BankAccount._id++;
    }

    setInterestRate(value: number) {
        BankAccount._interestRate = value;
    }

    getInterestRate(): number {
        return BankAccount._interestRate * this._balance;
    }

    deposit(value: number) {
        this._balance += value;
    }
}

class TestClient {
    bankAccount: BankAccount; 

    create() {
        this.bankAccount = new BankAccount();
        console.log(`Account ID${this.bankAccount.id} created`);
    }

    deposit(id: number, amount: number) {
        if (!this.bankAccount) {
            console.log("No account created yet.");
            return;
        }
        this.bankAccount.deposit(amount);
        console.log(`Deposited ${amount} to ID${id}`);
    }

    setInterestRate(value: number) {
        if (!this.bankAccount) {
            console.log("No account created yet.");
            return;
        }
        this.bankAccount.setInterestRate(value);
    }

    getInterestRate(id: number, years: number) {
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