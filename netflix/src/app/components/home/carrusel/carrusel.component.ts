import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})

export class CarruselComponent {

  @Input() categoria: any;

  carteleras: any[] =
  [
    {
      nombre: 'It 2',
      duracion: '128 minutos',
      imagen: '../../../../assets/img/peliculas/1.png',
      sinopsis: 'Abruptaaaaaaa esta es una prueba para observar como reacciona ante textos bastante largos y si seguimos metiendo más',
      id: 0,
      categoria: 'Peliculas'
    },
    {
      nombre: 'A la sombra',
      duracion: '128 minutos',
      imagen: '../../../../assets/img/peliculas/a-la-sombre.jpg',
      sinopsis: 'Abruptaaaaaaa esta es una prueba para observar como reacciona ante textos bastante largos y si seguimos metiendo más',
      id: 1,
      categoria: 'Peliculas'
    },
    {
      nombre: 'Pantera Negra',
      duracion: '128 minutos',
      imagen: '../../../../assets/img/peliculas/black-panter.jpg',
      sinopsis: 'Abruptaaaaaaa esta es una prueba para observar como reacciona ante textos bastante largos y si seguimos metiendo más',
      id: 2,
      categoria: 'Peliculas'
    },
    {
      nombre: 'Dumbo',
      duracion: '128 minutos',
      imagen: '../../../../assets/img/peliculas/dumbo.jpg',
      sinopsis: 'Abruptaaaaaaa esta es una prueba para observar como reacciona ante textos bastante largos y si seguimos metiendo más',
      id: 3,
      categoria: 'Peliculas'
    },
    {
      nombre: 'El Hobbit',
      duracion: '128 minutos',
      imagen: '../../../../assets/img/peliculas/el-hobbit-un-viaje-inesperado.jpg',
      sinopsis: 'Abruptaaaaaaa esta es una prueba para observar como reacciona ante textos bastante largos y si seguimos metiendo más',
      id: 4,
      categoria: 'Peliculas'
    },
    {
      nombre: 'El Legado',
      duracion: '128 minutos',
      imagen: '../../../../assets/img/peliculas/el-legado.jpg',
      sinopsis: 'Abruptaaaaaaa esta es una prueba para observar como reacciona ante textos bastante largos y si seguimos metiendo más',
      id: 5,
      categoria: 'Peliculas'
    },
    {
      nombre: 'Marry Poppins',
      duracion: '128 minutos',
      imagen: '../../../../assets/img/peliculas/marry-poppins.jpg',
      sinopsis: 'Abruptaaaaaaa esta es una prueba para observar como reacciona ante textos bastante largos y si seguimos metiendo más',
      id: 6,
      categoria: 'Peliculas'
    },
    {
      nombre: 'Shazam',
      duracion: '128 minutos',
      imagen: '../../../../assets/img/peliculas/shazam.jpg',
      sinopsis: 'Abruptaaaaaaa esta es una prueba para observar como reacciona ante textos bastante largos y si seguimos metiendo más',
      id: 7,
      categoria: 'Peliculas'
    },
    {
      nombre: 'It 2',
      duracion: '128 minutos',
      imagen: '../../../../assets/img/peliculas/1.png',
      sinopsis: 'Abruptaaaaaaa esta es una prueba para observar como reacciona ante textos bastante largos y si seguimos metiendo más',
      id: 8,
      categoria: 'Peliculas'
    },
    {
      nombre: 'A la sombra',
      duracion: '128 minutos',
      imagen: '../../../../assets/img/peliculas/a-la-sombre.jpg',
      sinopsis: 'Abruptaaaaaaa esta es una prueba para observar como reacciona ante textos bastante largos y si seguimos metiendo más',
      id: 9,
      categoria: 'eliculas'
    },
    {
      nombre: 'Pantera Negra',
      duracion: '128 minutos',
      imagen: '../../../../assets/img/peliculas/black-panter.jpg',
      sinopsis: 'Abruptaaaaaaa esta es una prueba para observar como reacciona ante textos bastante largos y si seguimos metiendo más',
      id: 10,
      categoria: 'Peliculas'
    },
    {
      nombre: 'Dumbo',
      duracion: '128 minutos',
      imagen: '../../../../assets/img/peliculas/dumbo.jpg',
      sinopsis: 'Abruptaaaaaaa esta es una prueba para observar como reacciona ante textos bastante largos y si seguimos metiendo más',
      id: 11,
      categoria: 'Peliculas'
    },
    {
      nombre: 'El Hobbit',
      duracion: '128 minutos',
      imagen: '../../../../assets/img/peliculas/el-hobbit-un-viaje-inesperado.jpg',
      sinopsis: 'Abruptaaaaaaa esta es una prueba para observar como reacciona ante textos bastante largos y si seguimos metiendo más',
      id: 12,
      categoria: 'Peliculas'
    },
    {
      nombre: 'El Legado',
      duracion: '128 minutos',
      imagen: '../../../../assets/img/peliculas/el-legado.jpg',
      sinopsis: 'Abruptaaaaaaa esta es una prueba para observar como reacciona ante textos bastante largos y si seguimos metiendo más',
      id: 13,
      categoria: 'Peliculas'
    },
    {
      nombre: 'Marry Poppins',
      duracion: '128 minutos',
      imagen: '../../../../assets/img/peliculas/marry-poppins.jpg',
      sinopsis: 'Abruptaaaaaaa esta es una prueba para observar como reacciona ante textos bastante largos y si seguimos metiendo más',
      id: 14,
      categoria: 'Peliculas'
    },
    {
      nombre: 'Shazam',
      duracion: '128 minutos',
      imagen: '../../../../assets/img/peliculas/shazam.jpg',
      sinopsis: 'Abruptaaaaaaa esta es una prueba para observar como reacciona ante textos bastante largos y si seguimos metiendo más',
      id: 15,
      categoria: 'Peliculas'
    },
    {
      nombre: 'El Hobbit',
      duracion: '128 minutos',
      imagen: '../../../../assets/img/peliculas/el-hobbit-un-viaje-inesperado.jpg',
      sinopsis: 'Abruptaaaaaaa esta es una prueba para observar como reacciona ante textos bastante largos y si seguimos metiendo más',
      id: 16,
      categoria: 'Peliculas'
    },
    {
      nombre: 'El Legado',
      duracion: '128 minutos',
      imagen: '../../../../assets/img/peliculas/el-legado.jpg',
      sinopsis: 'Abruptaaaaaaa esta es una prueba para observar como reacciona ante textos bastante largos y si seguimos metiendo más',
      id: 17,
      categoria: 'Peliculas'
    },
    {
      nombre: 'Marry Poppins',
      duracion: '128 minutos',
      imagen: '../../../../assets/img/peliculas/marry-poppins.jpg',
      sinopsis: 'Abruptaaaaaaa esta es una prueba para observar como reacciona ante textos bastante largos y si seguimos metiendo más',
      id: 18,
      categoria: 'Peliculas'
    }
  ];

  InfoCartelera: any;
  mostrarInf = false;

  constructor () {}

  moverIzquierda() {
    console.log('se hizo click izquieda ' + '#' + this.categoria.nombre);
    $('#' + this.categoria.nombre).animate({ scrollLeft: '-=1300' }, 1300);
  }

  moverDerecha() {
    console.log('se hizo click derecha ' + '#' + this.categoria.nombre);
    $('#' + this.categoria.nombre).animate( {scrollLeft: '+=1300' }, 1300);
 }
}
