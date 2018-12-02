import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-informacion-cartelera',
  templateUrl: './informacion-cartelera.component.html',
  styleUrls: ['./informacion-cartelera.component.css']
})
export class InformacionCarteleraComponent implements OnInit {

  @Input() infoCartelera: any;

  constructor() { }

  ngOnInit() {
  }

}
