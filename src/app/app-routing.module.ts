import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ParametersComponent } from './parameters/parameters.component';
import { ProfileComponent } from './profile/profile.component';
import { RessourcesComponent } from './ressources/ressources.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthentificationGuard } from './authentification.guard';

const routes: Routes = [
    { path: 'login', component: LoginFormComponent},
    { path: '',canActivate:[AuthentificationGuard], component: ProfileComponent }, //Temporary needs to replace ProfileComponent with home component
    { path: 'profil',canActivate:[AuthentificationGuard], component: ProfileComponent },
    { path: 'ressources',canActivate:[AuthentificationGuard], component: RessourcesComponent },
    { path: 'parametres',canActivate:[AuthentificationGuard], component: ParametersComponent},
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const AppRoutingModule = RouterModule.forRoot(appRoutes);
 