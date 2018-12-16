import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class LoginService {
    constructor( private cookieService: CookieService ) {}

    public isLogin(): Boolean {
        if ( this.cookieService.check('usuario') && this.cookieService.check('password') ) {
            return true;
        } else {
            return false;
        }


    }
}
