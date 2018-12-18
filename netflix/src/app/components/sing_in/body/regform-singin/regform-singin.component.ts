import { Component, OnInit } from '@angular/core';
import { SinginService } from '../../../../services/singin.service';
import * as $ from 'jquery';
import { Router } from '@angular/router';

let emailValido;
let passValido;
let user_email;
let user_password;

@Component({
  selector: 'app-regform-singin',
  templateUrl: './regform-singin.component.html',
  styleUrls: ['./regform-singin.component.css']
})

export class RegformSinginComponent implements OnInit {
  mostrar = false;
  constructor( private router: Router, private _singinService: SinginService ) {
      console.log(this._singinService.getPlanUsuario());
  }
  ngOnInit() {
     // Validacion campos
     $('#user-email').keyup(function() {
         const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
         user_email = $('#user-email').val();
         if (regex.test(user_email)) {
             $('#valid-email').attr('style', 'display:inline');
             $('#invalid-email').attr('style', 'display:none');
             ////////////
             $('#texto-invalid-email').attr('style', 'display:none');
             $('#email-vacio').attr('style', 'display:none');
             emailValido = true;
         } else {
             $('#invalid-email').attr('style', 'display:inline');
             $('#valid-email').attr('style', 'display:none');
             emailValido = false;
         }
     });

     $('#user-password').keyup(function() {
        user_password = $('#user-password').val();
         if (user_password.length >= 4) {
             $('#valid-password').attr('style', 'display:inline');
             $('#invalid-password').attr('style', 'display:none');
             ///////////
             $('#password-vacio').attr('style', 'display:none');
             passValido = true;
         } else {
             $('#invalid-password').attr('style', 'display:inline');
             $('#valid-password').attr('style', 'display:none');
             passValido = false;
         }
     });
     $('#btn-cc2').click(function() {
         // CORREO, CONTRASENIA VALIDO
         if (emailValido === true && passValido === true) {
             console.log('correo y contra valido'); // Capturar informacion y seguir con siguiente paso
             $('#texto-invalid-email').attr('style', 'display:none');
             $('#email-vacio').attr('style', 'display:none');
             $('#password-vacio').attr('style', 'display:none');
             // CORREO, CONTRASENIA INVALIDA
         } else if (emailValido === false && passValido === false) {
             console.log('correo y contra ivalido');
             $('#texto-invalid-email').attr('style', 'display:inline');
             $('#password-vacio').attr('style', 'display:inline');
             // CORREO INVALIDO, CONTRASENIA VALIDA
         } else if (emailValido === false && passValido === true) {
             console.log('correo in contra va');
             $('#texto-invalid-email').attr('style', 'display:inline');
             $('#email-vacio').attr('style', 'display:none');
             $('#password-vacio').attr('style', 'display:none');
             // CORREO VALIDO, CONTRASENIA INVALIDA
         } else if (passValido === false && emailValido === true) {
             console.log('correo co contra in');
             $('#texto-invalid-email').attr('style', 'display:none');
             $('#email-vacio').attr('style', 'display:none');
             $('#password-vacio').attr('style', 'display:inline');
             // CAMPO CORREO, CONTRASENIA VACIO
         } else if ($('#user-email').val() === '' && $('#user-password').val() === '') {
             console.log('falta correo y contra');
             $('#texto-invalid-email').attr('style', 'display:none');
             $('#email-vacio').attr('style', 'display:inline');
             $('#password-vacio').attr('style', 'display:inline');
             // CAMPO CORREO VACIO
         } else if ($('#user-email').val() === '' && $('#user-password').val() !== '') {
             console.log('falta correo');
             $('#texto-invalid-email').attr('style', 'display:none');
             $('#email-vacio').attr('style', 'display:inline');
             $('#password-vacio').attr('style', 'display:none');
             // CAMPO CONTRASENIA VACIO
         } else if ($('#user-password').val() === '' && $('#user-email').val() !== '') {
             console.log('falta contra');
             $('#texto-invalid-email').attr('style', 'display:none');
             $('#email-vacio').attr('style', 'display:none');
             $('#password-vacio').attr('style', 'display:inline');
         }
     });
  }

  camposValidos() {
      const dominioPrivado = 'netflix.com';
      const dominio = user_email.split('@');
    if ( emailValido && passValido ) {
        if ( dominioPrivado !== dominio[1] ) {
            this._singinService.setUsuario(user_email);
            this._singinService.setPassword(user_password);
            this.router.navigate(['/singin/metodopago']);
        } else {
            alert('El dominio proporcionado es propiedad de Netflix y no se puede usar');
        }

    }
  }

}
