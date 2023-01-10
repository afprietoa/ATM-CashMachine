export class Employee{
    #name;
    #document;
    #username;
    #password;
    #salary;

    constructor(name, document, salary){
        this.#name = name;
        this.#document = document;
        this.#salary = salary;
        this.#username = '';
        this.#password = '';
    }

    asignPassword(password){
        this.#password = password;
    }
    asignUsername(username){
        this.#username = username;
    }
    authenticable(username, password){
        return (username == this.#username && password == this.#password)
    }

    showBonus(){
        return this.#salary;
    }
    _showBonus(bono){
        return this.#salary + this.#salary*bono/100;
    }
}