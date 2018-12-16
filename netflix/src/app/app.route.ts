import { RouterModule, Routes } from '@angular/router';
import { InicioSinginComponent } from './components/sing_in/body/inicio-singin/inicio-singin.component';
import { PlanesSinginComponent } from './components/sing_in/body/planes-singin/planes-singin.component';
import { RegistroSinginComponent } from './components/sing_in/body/registro-singin/registro-singin.component';
import { RegformSinginComponent } from './components/sing_in/body/regform-singin/regform-singin.component';
import { MetodopagoSinginComponent } from './components/sing_in/body/metodopago-singin/metodopago-singin.component';
import { InfopagoSinginComponent } from './components/sing_in/body/infopago-singin/infopago-singin.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilesComponent } from './components/perfiles/perfiles-usuarios/perfiles.component';
import { AgregarPerfilesComponent } from './components/perfiles/agregar-perfiles/agregar-perfiles.component';
import { CardPeliculasComponent } from './components/home/card-peliculas/card-peliculas.component';
import { PrincipalComponent } from './components/home/principal/principal.component';
import { PeliculasComponent } from './components/home/peliculas/peliculas.component';
import { SeriesComponent } from './components/home/series/series.component';
import { RecientesComponent } from './components/home/recientes/recientes.component';
import { MiListaComponent } from './components/home/mi-lista/mi-lista.component';
import { ConfiguracionesComponent } from './components/home/configuraciones/configuraciones.component';
import { ReproductorComponent } from './components/reproductor/reproductor.component';
import { AuthGuardService } from './services/auth.guard.service';



const APP_ROUTES: Routes = [
    { path: 'singin', component: InicioSinginComponent },
    { path: 'singin/planes', component: PlanesSinginComponent },
    { path: 'singin/registro', component: RegistroSinginComponent },
    { path: 'singin/regform', component: RegformSinginComponent },
    { path: 'singin/metodopago', component: MetodopagoSinginComponent },
    { path: 'singin/infopago', component: InfopagoSinginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'perfiles/:nuevo', component: PerfilesComponent, canActivate: [AuthGuardService] },
    { path: 'agregarPerfiles', component: AgregarPerfilesComponent, canActivate: [AuthGuardService] },
    { path: 'card-pelicula', component: CardPeliculasComponent, canActivate: [AuthGuardService] },
    { path: 'peliculas', component: PeliculasComponent, canActivate: [AuthGuardService] },
    { path: 'principal', component: PrincipalComponent, canActivate: [AuthGuardService]},
    { path: 'series', component: SeriesComponent, canActivate: [AuthGuardService] },
    { path: 'recientes', component: RecientesComponent, canActivate: [AuthGuardService] },
    { path: 'mi-lista', component: MiListaComponent, canActivate: [AuthGuardService] },
    { path: 'configuraciones', component: ConfiguracionesComponent, canActivate: [AuthGuardService] },
    { path: 'reproductor/:id', component: ReproductorComponent, canActivate: [AuthGuardService] },
    { path: '**', pathMatch: 'full', redirectTo: 'principal' }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
