import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-inicio-singin',
  templateUrl: './inicio-singin.component.html',
  styleUrls: ['./inicio-singin.component.css']
})
export class InicioSinginComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
    $('#btn-ir').click(function() {
      $('#info-registro').animate({
         opacity: '0',
         left: '300px'
      }, 'fast');
     // $("#info-registro").attr("style", "display:none");
     $('#contenido-registro').attr('style', 'display:');
     $('#contenido-registro').animate({
         opacity: '1'
      });

 });
  }

}


