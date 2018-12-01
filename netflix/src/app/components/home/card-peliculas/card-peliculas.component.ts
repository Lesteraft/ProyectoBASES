import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-peliculas',
  templateUrl: './card-peliculas.component.html',
  styleUrls: ['./card-peliculas.component.css']
})
export class CardPeliculasComponent implements OnInit {

  pelicula = {
    direccion: '../../../../assets/img/peliculas/1.png',
    nombre: ' El Hobbit',
    duracion: 'chingo',
    sinopsis: 'chingona'
  };

  constructor() { }

  ngOnInit() {
  }

}
