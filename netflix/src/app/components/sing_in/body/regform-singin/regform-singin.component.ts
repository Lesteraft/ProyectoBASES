import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
@Component({
  selector: 'app-regform-singin',
  templateUrl: './regform-singin.component.html',
  styleUrls: ['./regform-singin.component.css']
})
export class RegformSinginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
     // Validacion campos
     let emailValido;
     let passValido;
     $('#user-email').keyup(function() {
         const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
         if (regex.test($('#user-email').val())) {
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

         if ($('#user-password').val().length >= 4) {
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

}