import { CustomError } from './../../models/custom-error';
import { Credential } from './../../models/credential';
import { Injectable } from '@angular/core';
import { LoginEndpoints } from './login.endpoints';


@Injectable()
export class LoginService {

  constructor() { }

  public login(credentials: Credential): Promise<any> {
    return Promise.resolve(true);
  }

   public recoveryPassword(email: string): Promise<any> {
    return Promise.resolve(true);
  }

}
