export class Customer{
    name;
    document;
    #username;
    #password;

    constructor(name, document){
        this.name = name;
        this.document = document;
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

}