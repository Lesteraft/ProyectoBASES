import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class PeliculasService {


    public cartelera: any;
    private categoria: any[];

    constructor( private cookieService: CookieService ) {

        /*$.ajax({
            url: 'http://localhost/trabajosUNAH/proyectoBASES/netflix/src/app/ajax/actualizar.php',
            method: 'POST',
            dataType: 'JSON',
            data: 'codigo=1',
            success: function(respuesta) {
                this.cartelera = respuesta;
                console.log(this.cartelera);
            },
            error: function(error) {
              // console.log(error);
            }
          });

    }

    getCartelera () {
        $.ajax({
            url: 'http://localhost/trabajosUNAH/proyectoBASES/netflix/src/app/ajax/actualizar.php',
            method: 'POST',
            dataType: 'JSON',
            data: 'codigo=1',
            success: function(respuesta) {
                return respuesta;
                console.log(this.cartelera);
            },
            error: function(error) {
                return error;
              // console.log(error);
            }
          });*/
    }


    getCartelera(): {} {
        return JSON.parse(this.cookieService.get('cartelera'));
    }

}
