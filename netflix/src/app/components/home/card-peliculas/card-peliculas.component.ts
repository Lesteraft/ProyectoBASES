import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-peliculas',
  templateUrl: './card-peliculas.component.html',
  styleUrls: ['./card-peliculas.component.css']
})
export class CardPeliculasComponent implements OnInit {

  @Input() cartelera: any;
  @Input() categoria: any;

 // @Output() InfoCartelera: EventEmitter<any>;

  constructor() {

   }

  ngOnInit() {
   // console.log(this.cartelera);
  }

/*
  mostrarInfo() {
    this.InfoCartelera.emit( this.cartelera );
  }

  */
}
