import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
  import { APP_ROUTING } from './app.route';
// Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarSingInComponent } from './components/sing_in/navbar/navbar.sing_in.component';
import { BodyComponent } from './components/sing_in/body/body.component';
import { InicioSinginComponent } from './components/sing_in/body/inicio-singin/inicio-singin.component';
import { PlanesSinginComponent } from './components/sing_in/body/planes-singin/planes-singin.component';
import { RegistroSinginComponent } from './components/sing_in/body/registro-singin/registro-singin.component';
import { RegformSinginComponent } from './components/sing_in/body/regform-singin/regform-singin.component';
import { MetodopagoSinginComponent } from './components/sing_in/body/metodopago-singin/metodopago-singin.component';
import { InfopagoSinginComponent } from './components/sing_in/body/infopago-singin/infopago-singin.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarSingInComponent,
    BodyComponent,
    InicioSinginComponent,
    PlanesSinginComponent,
    RegistroSinginComponent,
    RegformSinginComponent,
    MetodopagoSinginComponent,
    InfopagoSinginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
