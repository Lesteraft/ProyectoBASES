import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component ({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.css']
})

export class PerfilesComponent implements OnInit {

  nombre: any;

  constructor( private _router: Router, private activatesRoute: ActivatedRoute  ) {
    this.activatesRoute.params.subscribe( _params => {
      this.nombre = _params.nuevo;
      console.log(this.nombre);
      if ( this.nombre !== '0' ) {
        console.log('se agregó');
      }
    });
  }

  ngOnInit() {
  }

  regresar() { this._router.navigate(['login']); }

  agregarPerfil() {
    console.log('se ha dado click');
    this._router.navigate(['agregarPerfiles']);
  }

  administrarPerfiles() {
    console.log('se administrarán perfiles');
  }
  redireccionar() {
     this._router.navigate(['principal']);
 }
}
