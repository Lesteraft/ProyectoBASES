import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.css']
})
export class NavbarHomeComponent implements OnInit {

  i = 0;

  constructor( private _router: Router ) { }

  ngOnInit() {
  }

  mostrar() {
    $('#opcionesUssuario').css('display', 'block');
    this.i = 1;
  }

  ocultar() {
    this.i = 0;
    setTimeout(() => {
      if ( this.i === 0 ) {
        $('#opcionesUssuario').css('display', 'none');
      }
    } , 800);
  }

}
