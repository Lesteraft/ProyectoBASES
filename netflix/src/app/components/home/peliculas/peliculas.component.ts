import { Component, OnInit } from '@angular/core';
import {VgAPI} from 'videogular2/core';
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
    categorias: any[] = ['Mi_Lista', 'Peliculas'];
  constructor() {
  }

  ngOnInit() {
  }
    // this.api.play();

  }

