import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-planes-singin',
  templateUrl: './planes-singin.component.html',
  styleUrls: ['./planes-singin.component.css']
})
export class PlanesSinginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let planUsuario;

    $(window).click(function(e) {
        switch (e.target.id) {
            case 'plan-basico':
                planUsuario = 'basico';
                $('#triangulo-plan-basico').attr('style', 'display:');
                $('#triangulo-plan-basico').animate(
                    {
                        opacity: '1'
                    }, '500'
                );
                $('#triangulo-plan-estandar').attr('style', 'display:none');
                $('#triangulo-plan-premium').attr('style', 'display:none');
                $('#plan-basico').css({'background-color': '#F6121D'});
                $('#plan-estandar').css({'background-color': '#ef6b71'});
                $('#plan-premium').css({'background-color': '#ef6b71'});
                $('.col-planes-1').css({'color': '#F6121D'});
                $('.col-planes-2').css({'color': '#ccc'});
                $('.col-planes-3').css({'color': '#ccc'});
                break;
            case 'plan-estandar':
                planUsuario = 'estandar';
                $('#triangulo-plan-basico').attr('style', 'display:none');
                $('#triangulo-plan-estandar').attr('style', 'display:');
                $('#triangulo-plan-estandar').animate(
                    {
                        opacity: '1'
                    }, '500'
                );
                $('#triangulo-plan-premium').attr('style', 'display:none');
                $('#plan-basico').css({'background-color': '#ef6b71'});
                $('#plan-estandar').css({'background-color': '#F6121D'});
                $('#plan-premium').css({'background-color': '#ef6b71'});
                $('.col-planes-1').css({'color': '#ccc'});
                $('.col-planes-2').css({'color': '#F6121D'});
                $('.col-planes-3').css({'color': '#ccc'});
                break;
            case 'plan-premium':
                planUsuario = 'premium';
                $('#triangulo-plan-basico').attr('style', 'display:none');
                $('#triangulo-plan-estandar').attr('style', 'display:none');
                $('#triangulo-plan-premium').attr('style', 'display:');
                $('#triangulo-plan-premium').animate(
                    {
                        opacity: '1'
                    }, '500'
                );
                $('#plan-basico').css({'background-color': '#ef6b71'});
                $('#plan-estandar').css({'background-color': '#ef6b71'});
                $('#plan-premium').css({'background-color': '#F6121D'});
                $('.col-planes-1').css({'color': '#ccc'});
                $('.col-planes-2').css({'color': '#ccc'});
                $('.col-planes-3').css({'color': '#F6121D'});
                break;
            default:
                break;
        }
    });

    $('#btn-cc').click(function() {
        $('#contenido-registro').animate({
            opacity: '0'
         }, 'fast');
         $('html, body').animate({
            scrollTop: $('#contenido-registro-1').offset().top
        }, 300);
        // $("#contenido-registro").attr("style", "display:none");
        $('#contenido-registro-1').attr('style', 'display:');
        $('#contenido-registro-1').animate({
            opacity: '1'
         });
    });

  }
}
