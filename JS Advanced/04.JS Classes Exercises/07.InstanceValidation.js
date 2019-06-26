class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get clientId () {
        return this._clientId;
    }

    set clientId (value) {
        const cliendIdPattern = /^\d{6}$/;

        if(!cliendIdPattern.test(value)){
            throw new TypeError('Client ID must be a 6-digit number');
        }

        return this._clientId = value;
    }

    get email () {
        return this._email;
    }

    set email (value) {
        const emailPattern = /^\w+@[\w\\.]+$/;

        if(!emailPattern.test(value)){
            throw new TypeError('Invalid e-mail');
        }

        this._email = value;
    }

    get firstName () {
        return this._firstName;
    }

    set firstName (value) {
        if(value.length < 3 || value.length > 20) {
            throw new TypeError('First name must be between 3 and 20 characters long');
        }

        const firstNamePattern = /[a-zA-z]+/;

        if(!firstNamePattern.test(value)) {
            throw new TypeError('First name must contain only Latin characters');
        }

        return this._firstName = value;
    }

    get lastName () {
        return this._lastName;
    }

    set lastName (value) {
        if(value.length < 3 || value.length > 20) {
            throw new TypeError('Last name must be between 3 and 20 characters long');
        }

        const lastNamePattern = /[a-zA-z]+/;

        if(!lastNamePattern.test(value)) {
            throw new TypeError('Last name must contain only Latin characters');
        }

        return this._lastName = value;
    }
}