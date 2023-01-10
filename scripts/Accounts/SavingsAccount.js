import { Account } from "./Account.js";

export class SavingsAccount extends Account{
    constructor(customer, number, agency, balance){
        super(customer, number, agency, balance);
    }

    withdraw(value){
        super._withdraw(value,2);
    }
}