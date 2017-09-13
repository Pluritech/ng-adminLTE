import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService, AuthStatus } from '@pluritech/auth-service';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    return this.authService.isLogged().then((status) => {
      if (status !== AuthStatus.AUTHENTICATED) {
        this.router.navigate(['/login']);
        return false;
      }
      return true;
    });
  }
}

