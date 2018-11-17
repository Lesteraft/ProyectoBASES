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



@NgModule({
  declarations: [
    AppComponent,
    NavbarSingInComponent,
    BodyComponent,
    InicioSinginComponent,
    PlanesSinginComponent,
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
