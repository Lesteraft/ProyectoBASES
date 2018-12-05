import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
