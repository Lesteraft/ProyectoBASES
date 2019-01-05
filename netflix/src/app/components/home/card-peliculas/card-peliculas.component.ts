import { Component, OnInit, Input} from '@angular/core';
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

  constructor( private router: Router, private cookies: CookieService) {

   }

  ngOnInit() {
  }

   reproductor(id) {
      this.router.navigate(['/reproductor', id]);
      this.cookies.set( 'URL', this.cartelera.URL_VIDEO );

   }
}
