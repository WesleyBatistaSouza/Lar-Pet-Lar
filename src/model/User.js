// models/Usuario.js

export default class User {
    constructor(name, telephone, email, address, password) {
        this.name = name;
        this.telephone = telephone;
        this.email = email;
        this.address = address;
        this.password = password;
    }
}