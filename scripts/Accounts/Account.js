export class Account{
    #customer;
    #balance;

    constructor(customer, number, agency, balance){
        if(this.constructor == Account){
            throw new Error('Object of class "Account" should not be instantiated')
        }
        this.number = number;
        this.agency = agency;
        this.#customer =  customer;
        this.#balance = balance;
    }
    set customer(value){
        if(value instanceof Customer){
            this.#customer = value;
        }
    }

    get customer(){
        return this.#customer;
    }

    deposit(value){
        if(value>0)
            this.#balance += value;
        return this.#balance;
    }

    _withdraw(value){
        throw new Error('withdraw method should be implemented in the class');
    }

    withdraw(value, commission){
        value = value * (1+commission/100)
        if(value <= this.#balance)
            this.#balance -= value;
        return this.#balance;
    }

    transfer(value, account){
        this.withdraw(value);
        account.deposit(value);
    }

    showBalance(){
        return this.#balance;
    }
}