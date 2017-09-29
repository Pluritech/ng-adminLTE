import { environment } from './../../../environments/environment';
export class LoginEndpoints {

    public static login(): string {
        return `${environment.url}/auth/authorize`;
    }

    public static recoveryPassword(): string {
        return `${environment.url}/auth/forgot-password`;
    };

}
