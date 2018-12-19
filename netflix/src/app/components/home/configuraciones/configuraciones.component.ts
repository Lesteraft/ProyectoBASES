import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.component.html',
  styleUrls: ['./configuraciones.component.css']
})
export class ConfiguracionesComponent implements OnInit {
  public correo: any;
  public tarjeta: any;
  public plan: any;
  constructor(private cookieService: CookieService) {
    this.correo = this.cookieService.get('usuario');
    this.tarjeta = this.cookieService.get('tarjeta');
    this.plan = this.cookieService.get('plan');
  }

  ngOnInit() {
  }

}
