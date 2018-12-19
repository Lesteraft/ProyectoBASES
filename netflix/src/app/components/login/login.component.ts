import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { CookieService } from 'ngx-cookie-service';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private _router: Router, private cookieService: CookieService, private _peliculasService: PeliculasService) {
  }

  ngOnInit() {
  }

  login() {
    const cookie = this.cookieService;
    const router = this._router;
    const cartelera = this._peliculasService;
    let consulta: any;
    console.log('se ha dado click');
    if ((this.validacion('#id_userLoginId') || this.validacion('#id_userPassword')) &&
        (this.validacion('#id_userLoginId') && this.validacion('#id_userPassword'))) {
        $.ajax({
          url: 'http://localhost/proyectoBASES/netflix/src/app/ajax/login.php',
          method: 'POST',
          dataType: 'json',
          data: 'user=' + $('#id_userLoginId').val() + '&' + 'password=' + $('#id_userPassword').val(),
          success: function(respuestaUser) {
              consulta = respuestaUser;
              $.ajax({
                url: 'http://localhost/proyectoBASES/netflix/src/app/ajax/cargar-contenido.php',
                method: 'POST',
                dataType: 'json',
                data: 'accion=obtener_data',
                success: function(respuesta) {
                    /*respuesta contiene la tabla tbl_peliculas*/
                    const peliculas = JSON.stringify(respuesta);
                    // cartelera.setCartelera(peliculas);
                    console.log(respuesta);
                    if (consulta.codigo === 0) {
                     const tarjeta = '********' + consulta.NUMERO_TARJETA.substring(8, 12);
                     cookie.set('cod_cuenta', consulta.CODIGO_CUENTA);
                     cookie.set('cartelera', peliculas);
                     cookie.set('usuario', consulta.CORREO);
                     cookie.set('tarjeta', tarjeta );
                     cookie.set('plan', consulta.NOMBRE_PLAN);
                     const dominio: any  = 'netflix.com';
                     const subString = consulta.CORREO.split('@');
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
