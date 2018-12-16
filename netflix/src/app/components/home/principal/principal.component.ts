import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';

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


  ngOnInit() {
  }

}
