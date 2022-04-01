import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ParametersComponent } from './parameters/parameters.component';
import { ProfileComponent } from './profile/profile.component';
import { RessourcesComponent } from './ressources/ressources.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full'},
  { path: 'profil', component: ProfileComponent },
  { path: 'ressources', component: RessourcesComponent },
  { path: 'parametres', component: ParametersComponent}
];
export const AppRoutingModule = RouterModule.forRoot(appRoutes);
 