import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  public correo: any;
  constructor(private cookieService: CookieService) {
    this.correo = cookieService.get('usuario');
  }
  ngOnInit() {
  }

  logout() {
    this.cookieService.deleteAll();
  }

}
