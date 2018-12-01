import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})

export class CarruselComponent {

  pack = 'pelisculas';

  constructor () {  }

  moverIzquierda() {
    event.preventDefault();
    console.log('se hizo click izquieda');
    $('.clearfix').animate({ scrollLeft: '-=1300' }, 1300);
  }

  moverDerecha() {
    event.preventDefault();
    console.log('se hizo click derecha');
   $('.clearfix').animate( {scrollLeft: '+=1300' }, 1300);
 }

}
