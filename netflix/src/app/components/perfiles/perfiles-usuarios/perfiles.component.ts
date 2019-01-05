import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../../services/login.service';
import { CookieService } from 'ngx-cookie-service';

@Component ({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.css']
})

export class PerfilesComponent {

  perfiles: any = [];

  constructor( private _router: Router, private activatesRoute: ActivatedRoute,
               private http: HttpClient, private loginUser: LoginService, private cookies: CookieService ) {

     this.http.post('http://localhost/proyectoBASES/netflix/src/app/ajax/cargar-perfiles.php', this.loginUser.getUsuario() )
        .subscribe( (data: any) => {
            this.perfiles = data;
           console.log(this.perfiles);
        })
     ;
  }

   regresar() { this._router.navigate(['login']); }

   agregarPerfil() {
      console.log('se ha dado click');
      this._router.navigate(['/agregarPerfiles']);
   }

   administrarPerfiles() {
      console.log('se administrarán perfiles');
   }
   redireccionar( perfil: any ) {
      this.cookies.set('perfilNombre', perfil.NOMBRE_PERFIL);
      this.cookies.set('perfilImagen', perfil.IMAGEN);
      console.log(perfil);
      this._router.navigate(['principal']);
   }
}
