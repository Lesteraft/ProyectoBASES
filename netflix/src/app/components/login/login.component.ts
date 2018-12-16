import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private _router: Router, private cookieService: CookieService) {
  }

  ngOnInit() {
  }

  login() {
    const cookie = this.cookieService;
    const router = this._router;
    console.log('se ha dado click');
    if ((this.validacion('#id_userLoginId') || this.validacion('#id_userPassword')) &&
        (this.validacion('#id_userLoginId') && this.validacion('#id_userPassword'))) {
        $.ajax({
          url: 'http://localhost/proyectoBASES/netflix/src/app/ajax/login.php',
          method: 'POST',
          dataType: 'json',
          data: 'user=' + $('#id_userLoginId').val() + '&' + 'password=' + $('#id_userPassword').val(),
          success: function(respuesta) {
            console.log(respuesta);
              if (respuesta.codigo === 0) {
               cookie.set('usuario', respuesta.CORREO);
               cookie.set('password', respuesta.CONTRASENIA);
               const dominio: any  = 'netflix.com';
               const subString = respuesta.CORREO.split('@');
               if (dominio ===  subString[1]) {
                router.navigate(['/administrador']);
               } else {
                router.navigate(['perfiles', '0']);
               }
              } else {
                alert('usuario y/o contraseña incorrectos');
              }

          },
          error: function(error) {
            console.log(error);
          }
        });
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
