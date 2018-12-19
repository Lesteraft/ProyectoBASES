import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {VgAPI} from 'videogular2/core';
import * as $ from 'jquery';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})

export class ReproductorComponent implements OnInit {
   api: VgAPI;
  video: any = {
    url: ''
  };

  @Input() id;
  constructor(private activeRoute: ActivatedRoute, private cookie: CookieService ) {
    this.activeRoute.params.subscribe(  params => {
       this.id = params['id'];
    });
    this.video.url = this.cookie.get('url');
  }

  ngOnInit() {
  }

  cargarVideo() {
    console.log(this.video);
  }

  onPlayerReady(api: VgAPI) {
    this.api = api;
    this.api.play();
  }
}


