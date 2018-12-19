import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';
import { PeliculasService } from '../../../services/peliculas.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  carteleras2: any[];
  carteleras: any[];
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

  constructor( private _peliculasService: PeliculasService ) {
  }
  ngOnInit() {
    console.log(this._peliculasService.getCartelera());
  }

}
