import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.css']
})


export class NavbarHomeComponent implements OnInit {

  i = 0;

  constructor( private _router: Router, private auth: AuthService ) { }

  ngOnInit() {
  let textoBusqueda: any;
  let activeSearch: Boolean = false;
    $('#icon-search').click(function() {
        if (activeSearch === false) {
          $('#input-search').attr('style', 'display:inline-block');
          $('#input-search').animate({
            width: '205px'
          }, 400, function() {
          });
          $('#input-search').attr('style', 'border-left:none');
          $('.icon').attr('style', 'border: 1px solid #fff; border-right:none; padding:0; height:30px');
          $('#input-search').focus();
          activeSearch = true;
        } else {
          textoBusqueda = $('#input-search').val();
          console.log(textoBusqueda + 'icon');

        }

    });

    $(window).click(function(e: any) {
        switch (e.target.id) {
          case 'input-search':
          case 'icon-search':
                break;
          default:
            $('#input-search').animate({
              opacity: '0',
              width: '5px',
              border: 'none'
            }, 200, function() {
            });
            $('.icon').attr('style', '');
            activeSearch = false;
            break;
        }
    });

    $('#input-search').keypress(function(e: any) {
        if ( e.which === 13 ) {
            textoBusqueda = $('#input-search').val();
            console.log(textoBusqueda);
        }
    });

    $(window).scroll(function() {
      if ($(window).scrollTop() < 1) {
        $('.navbar').attr('style', 'background-color: transparent !important;');
      } else if ($(window).scrollTop() > 10) {
         $('.navbar').attr('style', 'background-color:rgb(20, 20, 20) !important; position:sticky !important');
      }
   });
  }

  mostrar() {
    $('#opcionesUssuario').css('display', 'block');
    this.i = 1;
  }

  ocultar() {
    this.i = 0;
    setTimeout(() => {
      if ( this.i === 0 ) {
        $('#opcionesUssuario').css('display', 'none');
      }
    } , 800);
  }


}
