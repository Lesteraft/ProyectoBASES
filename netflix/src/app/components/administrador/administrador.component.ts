import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import * as $ from 'jquery';

let selecClasif: any;
let formData: any;

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  public correo: any;
  private archivoVideoSelect: File = null;
  private archivoImagenSelect: File = null;

  constructor(private cookieService: CookieService) {
    this.correo = cookieService.get('usuario');
  }
  ngOnInit() {
    $('#slcClasif').change(function() {
      selecClasif = $('#slcClasif').val();
      console.log(selecClasif);
   });

  }

  logout() {
    this.cookieService.deleteAll();
  }

  archivoVideoSeleccionado( archivo ) {
    this.archivoVideoSelect = <File>archivo.target.files[0];
  }

  archivoImagenSeleccionado( archivo ) {
    this.archivoImagenSelect = <File>archivo.target.files[0];
  }

  subirPeli() {
    console.log(selecClasif);
    let clasificacion;
    switch (selecClasif) {
      case '1':
        clasificacion = 'Mayores de 18 años';
        break;
      case '2':
        clasificacion = 'Mayores de 15 años';
        break;
      case '3':
        clasificacion = 'Mayores de 13 años';
        break;
      case '4':
        clasificacion = 'Todas las edades';
          break;
      default:
        break;
    }
    const urlVideo = this.archivoVideoSelect.name.split('.');
    const urlImagen = this.archivoImagenSeleccionado.name.split('.');
    const parametros = 'nombre=' + this.archivoVideoSelect.name + '&' +
                     'resenia=' + $('#resenia').val() + '&' +
                     'clasificacion=' + clasificacion + '&' +
                     'fecha=' + $('#fecha_estreno').val() + '&' +
                     'urlVideo=E:/wamp64/www/ProyectoBASES/netflix/src/assets/video/' +
                      urlVideo[0] + '/' + this.archivoVideoSelect.name + '&' +
                     'urlImagen=E:/wamp64/www/ProyectoBASES/netflix/src/assets/video/' +
                      urlImagen[0] + '/' + this.archivoImagenSelect.name;

      console.log(parametros);

  }

}
