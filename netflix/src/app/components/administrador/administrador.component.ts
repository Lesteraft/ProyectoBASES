import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

let selecClasif: any;

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  public correo: any;
  private archivoVideoSelect: File = null;
  private archivoImagen1Select: File = null;
  private archivoImagen2Select: File = null;

  constructor( private cookieService: CookieService, private _router: Router,
               private http: HttpClient) {
    this.correo = cookieService.get('usuario');
  }
  ngOnInit() {
    $('#slcClasif').change(function() {
      selecClasif = $('#slcClasif').val();
      console.log(selecClasif);
   });

  }

  uploadImg(id) {
    $('#' + id).addClass('btn-success');
    $('#' + id).removeClass('btn-outline-light');
    $('#' + id).css('disabled', 'disabled');
    console.log(id);
  }

  logout() {
    this.cookieService.deleteAll();
  }

  archivoVideoSeleccionado( archivo ) {
    this.archivoVideoSelect = <File>archivo.target.files[0];
  }

  archivoImagen1Seleccionado( archivo ) {
    this.archivoImagen1Select = <File>archivo.target.files[0];
  }

  archivoImagen2Seleccionado( archivo ) {
    this.archivoImagen2Select = <File>archivo.target.files[0];
  }

  subirPeli() {
    console.log(selecClasif);

    const urlVideo = this.archivoVideoSelect.name.split('.');

    const parametros =
    {
      'nombre': $('#txt-nombrePeli').val(),
      'resenia': $('#resenia').val(),
      'clasificacion': selecClasif,
      'fecha': $('#fecha_estreno').val(),
      'urlVideo': '../../../../assets/video/' +
      urlVideo[0] + '/' + this.archivoVideoSelect.name,
      'urlImagen1': '../../../../assets/video/' +
      urlVideo[0] + '/' + this.archivoImagen1Select.name,
      'urlImagen2':'../../../../assets/video/' +
      urlVideo[0] + '/' + this.archivoImagen2Select.name
   };



      console.log(parametros);

      this.http.post('http://localhost/proyectoBASES/netflix/src/app/ajax/subir-peliculas.php', parametros)
         .subscribe( data => {
            console.log(data);
         }, error => {
            console.log(error);
         })
      ;


      // this._router.navigate(['principal']);
  }

  eliminarCuenta() {
    console.log($('#input-eliminar').val());
    $.ajax({
      url: 'http://localhost/proyectoBASES/netflix/src/app/ajax/eliminar-cuenta.php',
      method: 'POST',
      dataType: 'JSON',
      data: 'codigo_cuenta=' + $('#input-eliminar').val(),
      success: function(respuesta) {
          console.log(respuesta);
          alert('exito');
      },
      error: function(error) {
        console.log(error);
      }

    });
  }
}
