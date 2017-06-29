export class Credential {
    _email: string;
    _password: string;

    constructor(email, password) {
        this._email = email;
        this._password = password;
    }
}