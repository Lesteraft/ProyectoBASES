import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})

export class CarruselComponent {

  @Input() categoria: any;

  constructor () {}

  moverIzquierda() {
    console.log('se hizo click izquieda ' + this.categoria);
    $('#' + this.categoria).animate({ scrollLeft: '-=1300' }, 1300);
  }

  moverDerecha() {
    console.log('se hizo click derecha ' + '#' + this.categoria);
   $('#' + this.categoria).animate( {scrollLeft: '+=1300' }, 1300);
 }

}
