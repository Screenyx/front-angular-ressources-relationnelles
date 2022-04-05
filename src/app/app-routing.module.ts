import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ParametersComponent } from './parameters/parameters.component';
import { ProfileComponent } from './profile/profile.component';
import { RessourcesComponent } from './ressources/ressources.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'profil', component: ProfileComponent },
  { path: 'ressources', component: RessourcesComponent },
  { path: 'parametres', component: ParametersComponent},
  { path: '**', redirectTo: '/home'}
];
export const AppRoutingModule = RouterModule.forRoot(appRoutes);
 