import { Account } from "./Account.js";

export class CurrentAccount extends Account {
    static quantity = 0;

    constructor(customer, number, agency, balance){
        super(customer, number, agency, balance);
        CurrentAccount.quantity++;
    }

    withdraw(value){
        super._withdraw(value, 5);
    }
}