import { Component, OnInit, Input } from '@angular/core';

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
      sinopsis: 'Abruptaaaaaaa esta es una prueba para observar como reacciona ante textos bastante largos y si seguimos metiendo más'
    },
    {
      nombre: 'A la sombra',
      duracion: '128 minutos',
      imagen: '../../../../assets/img/peliculas/a-la-sombre.jpg',
      sinopsis: 'Abruptaaaaaaa esta es una prueba para observar como reacciona ante textos bastante largos y si seguimos metiendo más'
    },
    {
      nombre: 'Pantera Negra',
      duracion: '128 minutos',
      imagen: '../../../../assets/img/peliculas/black-panter.jpg',
      sinopsis: 'Abruptaaaaaaa esta es una prueba para observar como reacciona ante textos bastante largos y si seguimos metiendo más'
    },
    {
      nombre: 'Dumbo',
      duracion: '128 minutos',
      imagen: '../../../../assets/img/peliculas/dumbo.jpg',
      sinopsis: 'Abruptaaaaaaa esta es una prueba para observar como reacciona ante textos bastante largos y si seguimos metiendo más'
    },
    {
      nombre: 'El Hobbit',
      duracion: '128 minutos',
      imagen: '../../../../assets/img/peliculas/el-hobbit-un-viaje-inesperado.jpg',
      sinopsis: 'Abruptaaaaaaa esta es una prueba para observar como reacciona ante textos bastante largos y si seguimos metiendo más'
    },
    {
      nombre: 'El Legado',
      duracion: '128 minutos',
      imagen: '../../../../assets/img/peliculas/el-legado.jpg',
      sinopsis: 'Abruptaaaaaaa esta es una prueba para observar como reacciona ante textos bastante largos y si seguimos metiendo más'
    },
    {
      nombre: 'Marry Poppins',
      duracion: '128 minutos',
      imagen: '../../../../assets/img/peliculas/marry-poppins.jpg',
      sinopsis: 'Abruptaaaaaaa esta es una prueba para observar como reacciona ante textos bastante largos y si seguimos metiendo más'
    },
    {
      nombre: 'Shazam',
      duracion: '128 minutos',
      imagen: '../../../../assets/img/peliculas/shazam.jpg',
      sinopsis: 'Abruptaaaaaaa esta es una prueba para observar como reacciona ante textos bastante largos y si seguimos metiendo más'
    },
    {
      nombre: 'It 2',
      duracion: '128 minutos',
      imagen: '../../../../assets/img/peliculas/1.png',
      sinopsis: 'Abruptaaaaaaa esta es una prueba para observar como reacciona ante textos bastante largos y si seguimos metiendo más'
    },
    {
      nombre: 'A la sombra',
      duracion: '128 minutos',
      imagen: '../../../../assets/img/peliculas/a-la-sombre.jpg',
      sinopsis: 'Abruptaaaaaaa esta es una prueba para observar como reacciona ante textos bastante largos y si seguimos metiendo más'
    },
    {
      nombre: 'Pantera Negra',
      duracion: '128 minutos',
      imagen: '../../../../assets/img/peliculas/black-panter.jpg',
      sinopsis: 'Abruptaaaaaaa esta es una prueba para observar como reacciona ante textos bastante largos y si seguimos metiendo más'
    },
    {
      nombre: 'Dumbo',
      duracion: '128 minutos',
      imagen: '../../../../assets/img/peliculas/dumbo.jpg',
      sinopsis: 'Abruptaaaaaaa esta es una prueba para observar como reacciona ante textos bastante largos y si seguimos metiendo más'
    },
    {
      nombre: 'El Hobbit',
      duracion: '128 minutos',
      imagen: '../../../../assets/img/peliculas/el-hobbit-un-viaje-inesperado.jpg',
      sinopsis: 'Abruptaaaaaaa esta es una prueba para observar como reacciona ante textos bastante largos y si seguimos metiendo más'
    },
    {
      nombre: 'El Legado',
      duracion: '128 minutos',
      imagen: '../../../../assets/img/peliculas/el-legado.jpg',
      sinopsis: 'Abruptaaaaaaa esta es una prueba para observar como reacciona ante textos bastante largos y si seguimos metiendo más'
    },
    {
      nombre: 'Marry Poppins',
      duracion: '128 minutos',
      imagen: '../../../../assets/img/peliculas/marry-poppins.jpg',
      sinopsis: 'Abruptaaaaaaa esta es una prueba para observar como reacciona ante textos bastante largos y si seguimos metiendo más'
    },
    {
      nombre: 'Shazam',
      duracion: '128 minutos',
      imagen: '../../../../assets/img/peliculas/shazam.jpg',
      sinopsis: 'Abruptaaaaaaa esta es una prueba para observar como reacciona ante textos bastante largos y si seguimos metiendo más'
    },
    {
      nombre: 'El Hobbit',
      duracion: '128 minutos',
      imagen: '../../../../assets/img/peliculas/el-hobbit-un-viaje-inesperado.jpg',
      sinopsis: 'Abruptaaaaaaa esta es una prueba para observar como reacciona ante textos bastante largos y si seguimos metiendo más'
    },
    {
      nombre: 'El Legado',
      duracion: '128 minutos',
      imagen: '../../../../assets/img/peliculas/el-legado.jpg',
      sinopsis: 'Abruptaaaaaaa esta es una prueba para observar como reacciona ante textos bastante largos y si seguimos metiendo más'
    },
    {
      nombre: 'Marry Poppins',
      duracion: '128 minutos',
      imagen: '../../../../assets/img/peliculas/marry-poppins.jpg',
      sinopsis: 'Abruptaaaaaaa esta es una prueba para observar como reacciona ante textos bastante largos y si seguimos metiendo más'
    }
  ];

  constructor () {}

  moverIzquierda() {
    console.log('se hizo click izquieda ' + '#' + this.categoria);
    $('#' + this.categoria).animate({ scrollLeft: '-=1300' }, 1300);
  }

  moverDerecha() {
    console.log('se hizo click derecha ' + '#' + this.categoria);
   $('#' + this.categoria).animate( {scrollLeft: '+=1300' }, 1300);
 }

}
