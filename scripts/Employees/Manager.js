import { Employee } from "./Employee.js";

export class Manager extends Employee{
    constructor(name, document, salary, username, password ){
        super(name, document, salary, username, password);
    }

    showBonus(){
        const bono = 5;
        return super._showBonus(bono);
    }
}