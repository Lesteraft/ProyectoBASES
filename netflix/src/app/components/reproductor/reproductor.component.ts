import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {VgAPI} from 'videogular2/core';
import {PeliculasService} from '../../services/peliculas.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})

export class ReproductorComponent {
   api: VgAPI;
   video: any = {
      url: ''
   };

   constructor( private activeRoute: ActivatedRoute,
               private _peliculasService: PeliculasService, private cookies: CookieService) {
      this.activeRoute.params.subscribe(  params => {
         this.video.url = cookies.get('URL');
      });

   }

  onPlayerReady(api: VgAPI) {
    this.api = api;
    this.api.play();
  }
}
