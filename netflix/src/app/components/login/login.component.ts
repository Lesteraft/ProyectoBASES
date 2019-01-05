import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../services/login.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario: any = {};
  respuesta: any;

  constructor( private _router: Router, private http: HttpClient,
               private _login: LoginService, private cookiesService: CookieService ) { }

   login() {

      const router = this._router;
      const cookie = this.cookiesService

      console.log('se ha dado click');
      if ((this.validacion('#id_userLoginId') || this.validacion('#id_userPassword')) &&
      (this.validacion('#id_userLoginId') && this.validacion('#id_userPassword'))) {
         this.usuario = {usuario: $('#id_userLoginId').val(), contraseña: $('#id_userPassword').val()};
         console.log(this.usuario);

         this.http.post('http://localhost/proyectoBASES/netflix/src/app/ajax/login.php', this.usuario)
            .subscribe( (data: any ) => {
               console.log(data);

               if ( data.codigo === 0 ){
                  console.log('usuario encontrado amigo');
                  this._login.login( data );
                  let dominio  = 'netflix.com';
                  let domUsuario = data.CORREO.split('@');
                  cookie.set('CODIGO_CUENTA', data.CODIGO_CUENTA);
                  cookie.set('CORREO', data.CORREO);
                  cookie.set('PLAN', data.NOMBRE_PLAN);
                  if (dominio ===  domUsuario[1]) {
                     router.navigate(['/administrador']);
                  } else {
                     router.navigate(['perfiles', '0']);
                  }
               } else {
                  console.log('no hay paso!');
               }

            })
         ;
      }
   }

   validacion(id) {
      if ($(id).val() === '') {
         $(id).addClass('is-invalid');
         return false;
      } else {
         $(id).removeClass('is-invalid');
         return true;
    }
   }
}
