import { RouterModule, Routes } from '@angular/router';
import { InicioSinginComponent } from './components/sing_in/body/inicio-singin/inicio-singin.component';
import { PlanesSinginComponent } from './components/sing_in/body/planes-singin/planes-singin.component';
import { RegistroSinginComponent } from './components/sing_in/body/registro-singin/registro-singin.component';
import { RegformSinginComponent } from './components/sing_in/body/regform-singin/regform-singin.component';
import { MetodopagoSinginComponent } from './components/sing_in/body/metodopago-singin/metodopago-singin.component';
import { InfopagoSinginComponent } from './components/sing_in/body/infopago-singin/infopago-singin.component';

const APP_ROUTES: Routes = [
    { path: 'inicio', component: InicioSinginComponent },
    { path: 'planes', component: PlanesSinginComponent },
    { path: 'registro', component: RegistroSinginComponent },
    { path: 'regform', component: RegformSinginComponent },
    { path: 'metodopago', component: MetodopagoSinginComponent },
    { path: 'infopago', component: InfopagoSinginComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
