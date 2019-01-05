import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { LoginService } from '../../../services/login.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-agregar-perfiles',
  templateUrl: './agregar-perfiles.component.html',
  styleUrls: ['./agregar-perfiles.component.css']
})
export class AgregarPerfilesComponent {

  constructor( private _router: Router, private loginUser: LoginService, private http: HttpClient ) { }

  cancelar() {
    console.log('se dió cancelar');
    this._router.navigate(['perfiles', '0']);
  }

   continuar( nombre: string ) {
      if ( nombre !== '' ) {
         const datos = {
            'nombre': nombre,
            'codigo_cuenta': this.loginUser.getUsuario().CODIGO_CUENTA,
            'codigo_idioma': 1,
            'codigo_lugar': 1,
            'codigo_clasificacion': 1,
            'codigo_control_parental': 1,
            'imagen': './assets/img/perfil/001.png'
         };
         console.log(datos);

         this.http.post('http://localhost/proyectoBASES/netflix/src/app/ajax/agregar-perfil.php', datos)
            .subscribe( (data: any) => {
               console.log(data);
            } )
         ;

         this._router.navigate(['perfiles', '0']);

      } else {
         console.log('debe haber problemas');
         $('#txtNombreAgregar').addClass('errorInput');
      }
   }

}
