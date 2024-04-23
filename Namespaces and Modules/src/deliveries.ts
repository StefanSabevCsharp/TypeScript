export interface Delivery{
    newCustomer:(customer:string) => (customerName: string, visited: boolean) => void;
    visitCustomer: (customer:string) => (customerName: string) => string;
    showCustomers:() => string;
}