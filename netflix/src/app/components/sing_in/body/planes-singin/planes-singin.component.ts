import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { SinginService } from '../../../../services/singin.service';
import { Router } from '@angular/router';

let planUsuario;

@Component({
  selector: 'app-planes-singin',
  templateUrl: './planes-singin.component.html',
  styleUrls: ['./planes-singin.component.css']
})
export class PlanesSinginComponent implements OnInit {
  constructor(private router: Router, private _singinService: SinginService) { }

  ngOnInit() {
    $(window).click(function(e: any) {
        switch (e.target.id) {
            case 'plan-basico':
                planUsuario = 1;
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
                planUsuario = 2;
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
                planUsuario = 3;
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

  }

  private sendPlanUsuario() {
    this._singinService.setPlanUsuario(planUsuario);
    this.router.navigate(['/singin/registro']);
  }
}
