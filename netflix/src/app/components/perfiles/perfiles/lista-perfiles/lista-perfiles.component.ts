import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-lista-perfiles',
  templateUrl: './lista-perfiles.component.html',
  styleUrls: ['./lista-perfiles.component.css']
})
export class ListaPerfilesComponent implements OnInit {
  constructor( private _router: Router ) {
   }

  ngOnInit() {
    $.ajax({
      url: 'http://localhost/proyectoBASES/netflix/src/app/ajax/cargar-perfiles.php',
      method: 'POST',
      dataType: 'JSON',
      data: 'accion=cargar_perfiles',
      success: function(respuesta) {
         for ( let i = 0; i < respuesta.length; i++ ) {
            $('#perfiles').append(`
            <div class="cuadroPerfil p-xl-1 p-sm-0 p-md-1 p-lg-1 p-0" id="P001">
                <img class="img-fluid img-responsive img-circle" src='../../../assets/img/perfil/001.png'>
            </div>
            <div class="text-center">
              <span> ${respuesta[i].NOMBRE_PERFIL} </span>
            </div>
            `);
         }
      },
      error: function(error) {
        console.log(error);
      }
    });
  }

  redireccionar() {
     this._router.navigate(['principal']);
  }
}

