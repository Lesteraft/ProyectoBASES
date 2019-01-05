import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-lista-perfiles',
  templateUrl: './lista-perfiles.component.html',
  styleUrls: ['./lista-perfiles.component.css']
})
export class ListaPerfilesComponent {

   @Input() perfil: any;

   constructor( private _router: Router) {
   }


  redireccionar() {
     this._router.navigate(['principal']);
  }
}
