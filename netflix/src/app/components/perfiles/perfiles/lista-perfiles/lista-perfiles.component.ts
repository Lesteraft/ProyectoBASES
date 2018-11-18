import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-perfiles',
  templateUrl: './lista-perfiles.component.html',
  styleUrls: ['./lista-perfiles.component.css']
})
export class ListaPerfilesComponent implements OnInit {

  constructor( private _router:Router ) { }

  ngOnInit() {
  }

  redireccionar() {
     this._router.navigate(['principal']);
  }
}
