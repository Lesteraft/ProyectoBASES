import { RouterModule, Routes } from '@angular/router';
import { InicioSinginComponent } from './components/sing_in/body/inicio-singin/inicio-singin.component';
import { PlanesSinginComponent } from './components/sing_in/body/planes-singin/planes-singin.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilesComponent } from './components/perfiles/perfiles-usuarios/perfiles.component';


const APP_ROUTES: Routes = [
    { path: 'inicio', component: InicioSinginComponent },
    { path: 'planes', component: PlanesSinginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'perfiles', component: PerfilesComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
