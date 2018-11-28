import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
  import { APP_ROUTING } from './app.route';
// Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarSingInComponent } from './components/sing_in/navbar/navbar.sing_in.component';
import { RegistroSinginComponent } from './components/sing_in/body/registro-singin/registro-singin.component';
import { RegformSinginComponent } from './components/sing_in/body/regform-singin/regform-singin.component';
import { MetodopagoSinginComponent } from './components/sing_in/body/metodopago-singin/metodopago-singin.component';
import { InfopagoSinginComponent } from './components/sing_in/body/infopago-singin/infopago-singin.component';
import { InicioSinginComponent } from './components/sing_in/body/inicio-singin/inicio-singin.component';
import { PlanesSinginComponent } from './components/sing_in/body/planes-singin/planes-singin.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilesComponent } from './components/perfiles/perfiles-usuarios/perfiles.component';
import { AgregarPerfilesComponent } from './components/perfiles/agregar-perfiles/agregar-perfiles.component';
import { ListaPerfilesComponent } from './components/perfiles/perfiles/lista-perfiles/lista-perfiles.component';
import { PrincipalComponent } from './components/home/principal/principal.component';
import { NavbarHomeComponent } from './components/home/navbar-home/navbar-home.component';
import { CardPeliculasComponent } from './components/home/card-peliculas/card-peliculas.component';
import { PeliculasComponent } from './components/home/peliculas/peliculas.component';
import { SeriesComponent } from './components/home/series/series.component';
import { RecientesComponent } from './components/home/recientes/recientes.component';
import { MiListaComponent } from './components/home/mi-lista/mi-lista.component';
import { ConfiguracionesComponent } from './components/home/configuraciones/configuraciones.component';
import { CarruselComponent } from './components/home/carrusel/carrusel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarSingInComponent,
    InicioSinginComponent,
    RegistroSinginComponent,
    RegformSinginComponent,
    MetodopagoSinginComponent,
    InfopagoSinginComponent,
    PlanesSinginComponent,
    LoginComponent,
    PerfilesComponent,
    AgregarPerfilesComponent,
    ListaPerfilesComponent,
    PrincipalComponent,
    NavbarHomeComponent,
    CardPeliculasComponent,
    PeliculasComponent,
    SeriesComponent,
    RecientesComponent,
    MiListaComponent,
    ConfiguracionesComponent,
    CarruselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

const pagina = 'formulario';
