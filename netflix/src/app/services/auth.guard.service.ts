import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot,
         CanActivate
        } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthGuardService  implements CanActivate {
    constructor(  private loginService: LoginService,
                  private _router: Router, private http: HttpClient ) {}

    canActivate ( ) {

     if ( this.loginService.isLog() ) {
         console.log('si está logeado');
         return true;
      } else {
         console.error('Bloqueado');
         this._router.navigate(['/login']);
         return false;
      }

    }
}
