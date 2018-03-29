import { CustomError } from './../../models/custom-error';
import { Credential } from './../../models/credential';
import { Injectable } from '@angular/core';
import { ServerService } from '@pluritech/server-service';
import { LoginEndpoints } from './login.endpoints';


@Injectable()
export class LoginService {

  constructor(private serverService: ServerService) { }

  public login(credentials: Credential): Promise<any> {
    return this.serverService.post(LoginEndpoints.login(), credentials)
      .then(res => {
          if (res['kindOfUser'] === 'admin') {
            return res;
          } else {
            throw new CustomError('InvalidKindOfUser', null);
          }
        });
  }

   public recoveryPassword(email: string): Promise<any> {
    return this.serverService.put(LoginEndpoints.recoveryPassword(), {email: email});
  }

}
