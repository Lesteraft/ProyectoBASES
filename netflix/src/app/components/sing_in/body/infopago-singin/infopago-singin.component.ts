import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { post } from 'selenium-webdriver/http';

let valido: Boolean = false;
@Component({
  selector: 'app-infopago-singin',
  templateUrl: './infopago-singin.component.html',
  styleUrls: ['./infopago-singin.component.css']
})
export class InfopagoSinginComponent implements OnInit {

  constructor( private router: Router ) { }
  ngOnInit() {
      let nombre: string;
      let apellido: string = $('#infopago-apellido').val();
      let numero_tarjeta: string = $('#infopago-tarjeta').val();
      let fecha_vencimiento: string = $('#infopago-fecha_vencimiento').val();
      let cvc: string = $('#infopago-cvc').val();
      $('#infopago-nombre').keyup(function() {
        nombre = $('#infopago-nombre').val();
        if (nombre === '') {
          $('#infopago-nombre').attr('style', 'border: 1px solid red');
        } else {
          $('#infopago-nombre').attr('style', 'border: 1px solid green');
        }
     });

     $('#infopago-apellido').keyup(function() {
      apellido = $('#infopago-apellido').val();
      if ( apellido === '') {
        $('#infopago-apellido').attr('style', 'border: 1px solid red');
      } else {
        $('#infopago-apellido').attr('style', 'border: 1px solid green');
      }
     });

     $('#infopago-tarjeta').keyup(function() {
      numero_tarjeta = $('#infopago-tarjeta').val();
      if ( numero_tarjeta === '') {
        $('#infopago-tarjeta').attr('style', 'border: 1px solid red');
      } else {
        $('#infopago-tarjeta').attr('style', 'border: 1px solid rgb(189, 178, 178)');
        $('#invalid-tarjeta').attr('style', 'display:none');
      }
     });

     $('#infopago-fecha_vencimiento').keyup(function() {
      fecha_vencimiento = $('#infopago-fecha_vencimiento').val();
      if ( fecha_vencimiento === '') {
        $('#infopago-fecha_vencimiento').attr('style', 'border: 1px solid red');
      } else {
        $('#infopago-fecha_vencimiento').attr('style', 'border: 1px solid rgb(189, 178, 178)');
        $('#invalid-fecha-vencimiento').attr('style', 'display:none');
      }
     });

     $('#infopago-cvc').keyup(function() {
      cvc = $('#infopago-cvc').val();
      if ( cvc === '') {
        $('#infopago-cvc').attr('style', 'border: 1px solid red');
      } else {
        $('#infopago-cvc').attr('style', 'border: 1px solid rgb(189, 178, 178)');
        $('#invalid-cvc').attr('style', 'display:none');
      }
     });

  }

  valido(nombre: string, apellido: string, numero_tarjeta: string, fecha_vencimiento: string, cvc: string) {
    nombre = $('#infopago-nombre').val();
    apellido = $('#infopago-apellido').val();
    fecha_vencimiento = $('#infopago-fecha_vencimiento').val();
    cvc = $('#infopago-cvc').val();
    numero_tarjeta = $('#infopago-tarjeta').val();
    const regexFecha_vecimento = /([1-9]){2}\/([1-9]){2}/;
    const regexNumero_tarjeta = /([1-9]){12}/;
    const regexCVC = /([1-9]){3}/;
    let num: Boolean, fecha: Boolean, cod: Boolean;

    if (regexNumero_tarjeta.test(numero_tarjeta)) {
      num = true;
      console.log(numero_tarjeta);
      $('#invalid-tarjeta').attr('style', 'display:none');
    } else {
      num = false;
      $('#invalid-tarjeta').attr('style', 'display:block');
      $('#infopago-tarjeta').attr('style', 'border: 1px solid red');
    }

    if (regexFecha_vecimento.test(fecha_vencimiento)) {
      fecha = true;
      console.log(fecha_vencimiento);
    } else {
      $('#invalid-fecha-vencimiento').attr('style', 'display:block');
      $('#infopago-fecha_vencimiento').attr('style', 'border: 1px solid red');
      fecha = false;
    }

    if (regexCVC.test(cvc)) {
      cod = true;
      console.log(cvc);
    } else {
      $('#invalid-cvc').attr('style', 'display:block');
      $('#infopago-cvc').attr('style', 'border: 1px solid red');
      cod = false;
    }
    if ( num && fecha && cod ) {
      valido = true;
    }

    if (valido) {
      const parametros = 'nombre=' + nombre + '&' +
                         'apellido=' + apellido + '&' +
                         'numero_tarjeta=' + numero_tarjeta + '&' +
                         'fecha_vencimiento=' + fecha_vencimiento + '&' +
                         'cvc=' + cvc;
      console.log(parametros);
      /*$.ajax({
        url: '',
        data: parametros,
        method: post,
        dataType: JSON,
        success: function() {
          this.router.navigate(['/principal']);
        },
        error: function() {

        }
      });*/
    }
  }

}
