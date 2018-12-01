import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-peliculas',
  templateUrl: './card-peliculas.component.html',
  styleUrls: ['./card-peliculas.component.css']
})
export class CardPeliculasComponent implements OnInit {

  @Input() cartelera;

  constructor() { }

  ngOnInit() {
  }

}
