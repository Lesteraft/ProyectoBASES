import { Component, OnInit } from '@angular/core';
import {VgAPI} from 'videogular2/core';
import {Router} from '@angular/router';
import * as $ from 'jquery';
import { LaunchPreviewComponent } from '../../launch-preview/launch-preview.component';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})

export class PeliculasComponent implements OnInit {
    preload = 'auto';
    api: VgAPI;
    scroll: LaunchPreviewComponent = new LaunchPreviewComponent;
    categorias: any[] = [
      {
        nombre: 'Mi Lista',
        ID: 0
      },
      {
        nombre: 'Peliculas',
        ID: 1
      }
    ];
  constructor(private router: Router) {
  }

  ngOnInit() {
  }
    // this.api.play();
  cargarVideo() {
    console.log('prueba');
  }
  }

