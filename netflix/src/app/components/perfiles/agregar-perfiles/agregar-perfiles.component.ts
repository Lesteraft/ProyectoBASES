import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-agregar-perfiles',
  templateUrl: './agregar-perfiles.component.html',
  styleUrls: ['./agregar-perfiles.component.css']
})
export class AgregarPerfilesComponent implements OnInit {

  constructor( private _router: Router, private cookieService: CookieService) { }

  ngOnInit() {
  }

  cancelar() {
    console.log('se dió cancelar');
    this._router.navigate(['perfiles', '0']);
  }

  continuar( nombre: string ) {
    if ( nombre !== '' ) {
      console.log(nombre);
      $.ajax({
        url: 'http://localhost/proyectoBASES/netflix/src/app/ajax/agregar-perfil.php',
        method: 'POST',
        dataType: 'JSON',
        data: 'nombre=' + nombre + '&' + 'codigo_cuenta=' + this.cookieService.get('cod_cuenta'),
        success: function(respuesta) {
           // console.log(respuesta);
        },
        error: function(error) {
         // console.log(error);
        }
      });
      //this._router.navigate(['perfiles', nombre]);
    } else {
      console.log('debe haber problemas');
      $('#txtNombreAgregar').addClass('errorInput');
    }
  }

}
