import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';

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

  constructor() {
    $.ajax({
      url: 'http://localhost/trabajosUNAH/proyectoBASES/netflix/src/app/ajax/actualizar.php',
      method: 'POST',
      dataType: 'JSON',
      data: 'codigo=1',
      success: function(respuesta) {
          this.cartelera2 = respuesta;
          console.log(respuesta);
      },
      error: function(error) {
        console.log(error);
      }
    });
  }
  ngOnInit() {
    this.carteleras = this.carteleras2;
    console.log(this.carteleras);
  }

}
