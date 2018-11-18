import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component ({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.css']
})

export class PerfilesComponent implements OnInit {

  constructor( private _router: Router ) { }

  ngOnInit() {
  }

  regresar() { this._router.navigate(['login']); }

}
