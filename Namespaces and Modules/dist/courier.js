"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Courier {
    placesToVisit;
    constructor(placesToVisit) {
        this.placesToVisit = [];
    }
    newCustomer = (customer) => (customerName, visited = false) => {
        let obj = { customerName, visited };
        let exist = this.placesToVisit.some((el) => el.customerName === customerName);
        if (!exist) {
            this.placesToVisit.push(obj);
            console.log(`${customerName} just became your client.`);
        }
        else {
            throw new Error(`${customerName} is already a customer of yours!`);
        }
    };
    visitCustomer = (customer) => (customerName) => {
        let exist = this.placesToVisit.filter((el) => el.customerName === customerName)[0];
        if (exist) {
            exist.visited = true;
        }
        else {
            throw new Error(`${customerName} is not your customer".`);
        }
        return `${customerName} was visited.`;
    };
    showCustomers = () => {
        let result = '';
        this.placesToVisit.forEach((el) => {
            result += `Customer: ${el.customerName} - ${el.visited ? 'visited' : 'not visited'}\n`;
        });
        return result;
    };
}
let courier = new Courier([{ customerName: 'DHL', visited: false }]);
courier.newCustomer('Speedy');
courier.newCustomer('MTM');
courier.newCustomer('TipTop');
courier.visitCustomer('DHL');
courier.visitCustomer('MTM');
courier.visitCustomer('MTM');
console.log(courier.showCustomers());
