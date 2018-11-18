import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
  import { APP_ROUTING } from './app.route';
// Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarSingInComponent } from './components/sing_in/navbar/navbar.sing_in.component';
import { BodyComponent } from './components/sing_in/body/body.component';
import { RegistroSinginComponent } from './components/sing_in/body/registro-singin/registro-singin.component';
import { RegformSinginComponent } from './components/sing_in/body/regform-singin/regform-singin.component';
import { MetodopagoSinginComponent } from './components/sing_in/body/metodopago-singin/metodopago-singin.component';
import { InfopagoSinginComponent } from './components/sing_in/body/infopago-singin/infopago-singin.component';
import { InicioSinginComponent } from './components/sing_in/body/inicio-singin/inicio-singin.component';
import { PlanesSinginComponent } from './components/sing_in/body/planes-singin/planes-singin.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilesComponent } from './components/perfiles/perfiles-usuarios/perfiles.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';



@NgModule({
  declarations: [
    AppComponent,
    NavbarSingInComponent,
    BodyComponent,
    InicioSinginComponent,
    RegistroSinginComponent,
    RegformSinginComponent,
    MetodopagoSinginComponent,
    InfopagoSinginComponent,
    PlanesSinginComponent,
    LoginComponent,
    PerfilesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    AngularFontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
