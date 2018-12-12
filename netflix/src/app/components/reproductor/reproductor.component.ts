import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})

export class ReproductorComponent implements OnInit {
  video: any = {
    url: ''
  };

  @Input() id;
  constructor(private activeRoute: ActivatedRoute ) {
    this.activeRoute.params.subscribe(  params => {
       this.id = params['id'];
    });
    $.ajax({
      data: 'id=' + this.id,
      url: 'http://localhost/proyectoBASES/netflix/src/app/ajax/cargar-video.php',
      method: 'POST',
      dataType: 'JSON',
      success: function(respuesta) {
         $('#source-video').attr('src', respuesta.url);
          console.log(respuesta.url);
      },
      error: function(error) {
          console.log(error);
      }
    });
  }

  ngOnInit() {
  }

  cargarVideo() {
    console.log(this.video);
  }
}


