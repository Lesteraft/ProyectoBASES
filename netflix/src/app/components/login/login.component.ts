import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private _router: Router  ) {}

  ngOnInit() {
  }

  validar() {
    console.log('se ha dado click');
    if ((this.validacion('#id_userLoginId') || this.validacion('#id_userPassword')) &&
        (this.validacion('#id_userLoginId') && this.validacion('#id_userPassword'))) {
        this._router.navigate(['perfiles', '0']);
    }
  }

  validacion(id) {
    if ($(id).val() === '') {
        $(id).addClass('is-invalid');
        return false;
    } else {
        $(id).removeClass('is-invalid');
        return true;
    }
  }
}
