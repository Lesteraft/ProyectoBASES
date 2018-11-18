import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.css']
})
export class NavbarHomeComponent implements OnInit {

  constructor( private _router: Router ) { }

  ngOnInit() {
  }

  mostrar() {
    $('#opcionesUssuario').css('display', 'block');
  }

  ocultar() {
    setTimeout(function () {
        $('#opcionesUssuario').css('display', 'none');
    }, 1000);
  }

}
