import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ParametersComponent } from './parameters/parameters.component';
import { ProfileComponent } from './profile/profile.component';
import { RessourcesComponent } from './ressources/ressources.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthentificationGuard } from './authentification.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '',canActivate:[AuthentificationGuard], component: HomeComponent },
  { path: 'login', component: LoginFormComponent},
  { path: 'home',canActivate:[AuthentificationGuard], component: HomeComponent },
  { path: 'profil',canActivate:[AuthentificationGuard], component: ProfileComponent },
  { path: 'ressources',canActivate:[AuthentificationGuard], component: RessourcesComponent },
  { path: 'parametres',canActivate:[AuthentificationGuard], component: ParametersComponent},
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const AppRoutingModule = RouterModule.forRoot(appRoutes);
 