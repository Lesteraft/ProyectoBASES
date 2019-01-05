import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PeliculasService {

    public cartelera: any;

    constructor( private http: HttpClient) {
    }
   getCartelera() {
      return this.http.get('http://localhost/proyectoBASES/netflix/src/app/ajax/cargar-contenido.php');
   }
   getUrl( id ){
      return this.http.post('http://localhost/proyectoBASES/netflix/src/app/ajax/cargar-video.php', {'id': id});
   }
}
