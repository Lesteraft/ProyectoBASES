import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  categorias: any[] = [
    {
      nombre: 'Peliculas',
      ID: 0
    },
    {
      nombre: 'Series',
      ID: 1
    },
    {
      nombre: 'Anime',
      ID: 2
    },
    {
      nombre: 'Mi Lista',
      ID: 3
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
