import { Adress } from "./adress";
import { Company } from "./company";

export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    website: string;
    
};


export type UserDetails = {
    address: Adress;
    phone: string;
    company: Company;
}