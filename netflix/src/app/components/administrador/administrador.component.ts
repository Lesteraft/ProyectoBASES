import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
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

  constructor(private cookieService: CookieService) {
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

    const parametros = 'nombre=' + urlVideo[0] + '&' +
                     'resenia=' + $('#resenia').val() + '&' +
                     'clasificacion=' + selecClasif + '&' +
                     'fecha=' + $('#fecha_estreno').val() + '&' +
                     'urlVideo=../../../../assets/video/' +
                      urlVideo[0] + '/' + this.archivoVideoSelect.name + '&' +
                     'urlImagen1=../../../../assets/video/' +
                      urlVideo[0] + '/' + this.archivoImagen1Select.name + '&' +
                      'urlImagen2=../../../../assets/video/' +
                      urlVideo[0] + '/' + this.archivoImagen2Select.name;

      console.log(parametros);
      $.ajax({
        url: 'http://localhost/proyectoBASES/netflix/src/app/ajax/subir-peliculas.php',
        method: 'POST',
        dataType: 'JSON',
        data: parametros,
        success: function(respuesta) {
            console.log(respuesta);
        },
        error: function(error) {
          console.log(error);
        }

      });

  }
}

