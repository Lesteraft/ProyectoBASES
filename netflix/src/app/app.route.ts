import { RouterModule, Routes } from '@angular/router';
import { InicioSinginComponent } from './components/sing_in/body/inicio-singin/inicio-singin.component';
import { PlanesSinginComponent } from './components/sing_in/body/planes-singin/planes-singin.component';

const APP_ROUTES: Routes = [
    { path: 'inicio', component: InicioSinginComponent },
    { path: 'planes', component: PlanesSinginComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
