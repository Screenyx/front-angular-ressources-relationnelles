import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; 

import { AppComponent } from './app.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {AvatarModule} from "primeng/avatar";
import {BadgeModule} from "primeng/badge";
import {InputTextModule} from "primeng/inputtext";
import { ProfileComponent } from './profile/profile.component';
import { RessourcesComponent } from './ressources/ressources.component';
import { ParametersComponent } from './parameters/parameters.component';



@NgModule({
  declarations: [
    AppComponent,
    LeftSideBarComponent,
    LeftSideBarComponent,
    ProfileComponent,
    RessourcesComponent,
    ParametersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    AvatarModule,
    BadgeModule,
    InputTextModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
