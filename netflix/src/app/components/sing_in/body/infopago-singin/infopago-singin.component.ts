import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { SinginService } from '../../../../services/singin.service';
import { HttpClient } from '@angular/common/http';

let valido: Boolean = false;
@Component({
  selector: 'app-infopago-singin',
  templateUrl: './infopago-singin.component.html',
  styleUrls: ['./infopago-singin.component.css']
})
export class InfopagoSinginComponent implements OnInit {

  constructor( private router: Router, private _singinService: SinginService,
               private http: HttpClient ) { }
  ngOnInit() {
      let numero_tarjeta: any = $('#infopago-tarjeta').val();
      let fecha_vencimiento: any = $('#infopago-fecha_vencimiento').val();
      let cvc: any = $('#infopago-cvc').val();

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

  valido( numero_tarjeta: any, fecha_vencimiento: any, cvc: any) {
    fecha_vencimiento = $('#infopago-fecha_vencimiento').val();
    cvc = $('#infopago-cvc').val();
    numero_tarjeta = $('#infopago-tarjeta').val();
    const regexFecha_vecimento = /([0-9]){2}\/([0-9]){2}/;
    const regexNumero_tarjeta = /([0-9]){12}/;
    const regexCVC = /([0-9]){3}/;
    let num: Boolean, fecha: Boolean, cod: Boolean;

    if (regexNumero_tarjeta.test(numero_tarjeta)) {
      num = true;
      this._singinService.setNumeroTarjeta(numero_tarjeta);
      $('#invalid-tarjeta').attr('style', 'display:none');
    } else {
      num = false;
      $('#invalid-tarjeta').attr('style', 'display:block');
      $('#infopago-tarjeta').attr('style', 'border: 1px solid red');
    }

    if (regexFecha_vecimento.test(fecha_vencimiento)) {
      fecha = true;
      this._singinService.setFechaVencimientoTarjeta(fecha_vencimiento);
    } else {
      $('#invalid-fecha-vencimiento').attr('style', 'display:block');
      $('#infopago-fecha_vencimiento').attr('style', 'border: 1px solid red');
      fecha = false;
    }

    if (regexCVC.test(cvc)) {
      cod = true;
      this._singinService.setCvc(cvc);
    } else {
      $('#invalid-cvc').attr('style', 'display:block');
      $('#infopago-cvc').attr('style', 'border: 1px solid red');
      cod = false;
    }
    if ( num && fecha && cod ) {
      valido = true;
    }

    if (valido) {

      const parametros = {
         'usuario': this._singinService.getUsuario(),
         'password': this._singinService.getPassword(),
         'planUsuario': this._singinService.getPlanUsuario(),
         'numero_tarjeta': this._singinService.getNumeroTarjeta(),
         'fecha_vencimiento': this._singinService.getFechaVencimientoTarjeta(),
         'cvc': this._singinService.getCvc()
      };
      console.log(parametros);

      this.http.post('http://localhost/proyectoBASES/netflix/src/app/ajax/registro-usuario.php', parametros)
         .subscribe( (data: any) => {
            console.log(data)
         });

    }
  }

}
