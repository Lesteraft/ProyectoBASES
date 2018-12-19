import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-card-peliculas',
  templateUrl: './card-peliculas.component.html',
  styleUrls: ['./card-peliculas.component.css']
})
export class CardPeliculasComponent implements OnInit {

  @Input() cartelera: any;
  @Input() categoria: any;

 // @Output() InfoCartelera: EventEmitter<any>;

  constructor( private router: Router, private cookie: CookieService) {

   }

  ngOnInit() {
    console.log(this.cartelera);
  }

/*
  mostrarInfo() {
    this.InfoCartelera.emit( this.cartelera );
  }

  */

  reproductor(id) {
    const cookie = this.cookie;

    $.ajax({
      data: 'id=' + id,
      url: 'http://localhost/proyectoBASES/netflix/src/app/ajax/cargar-video.php',
      method: 'POST',
      dataType: 'JSON',
      success: function(respuesta) {
          cookie.set('url', respuesta.URL_VIDEO);
      },
      error: function(error) {
          console.log(error);
      }
    });
    console.log(id);
    this.router.navigate(['/reproductor', id]);
  }
}
