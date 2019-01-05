import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class LoginService {

   private usuario: any;
   private isLogin: boolean;

   constructor ( private cookies: CookieService ) {
   }

   logOut () {
      this.cookies.deleteAll();
   }

   login ( usuario ) {
      this.isLogin = true;
      this.usuario = usuario;
   }

   isLog () : boolean {
      if ( this.cookies.check('CORREO') ) {
         return true;
      } else {
         return false;
      }
   }

   getUsuario(){
      return this.usuario;
   }
}
