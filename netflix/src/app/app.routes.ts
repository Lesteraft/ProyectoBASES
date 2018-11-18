import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PerfilesComponent } from './components/perfiles/perfiles-usuarios/perfiles.component';

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'perfiles', component: PerfilesComponent },
    { path: '**', component: LoginComponent },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

