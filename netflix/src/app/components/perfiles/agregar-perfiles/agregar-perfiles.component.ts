import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-agregar-perfiles',
  templateUrl: './agregar-perfiles.component.html',
  styleUrls: ['./agregar-perfiles.component.css']
})
export class AgregarPerfilesComponent implements OnInit {

  constructor( private _router: Router) { }

  ngOnInit() {
  }

  cancelar() {
    console.log('se dió cancelar');
    this._router.navigate(['perfiles', '0']);
  }

  continuar( nombre: string ) {
    if ( nombre !== '' ) {
      console.log(nombre);
      this._router.navigate(['perfiles', nombre]);
    } else {
      console.log('debe haber problemas');
      $('#txtNombreAgregar').addClass('errorInput');
    }
  }

}
