import { Injectable } from '@angular/core';

@Injectable()
export class PeliculasService {


    cartelera: any[];
    categoria: any[];


    constructor() {

        $.ajax({
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
          });
    }

}
