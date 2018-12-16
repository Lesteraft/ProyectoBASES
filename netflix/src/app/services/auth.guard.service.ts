import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot,
         CanActivate
        } from '@angular/router';

@Injectable()
export class AuthGuardService  implements CanActivate {
    constructor( private loginService: LoginService, private _router: Router ) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.loginService.isLogin()) {
            return true;
        } else {
            console.log(next);
            console.error('Bloqueado');
            this._router.navigate(['/login']);
            return false;
        }
    }
}

