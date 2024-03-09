import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AlbumComponent } from './components/album/album.component';
import { StepComponent } from './components/step/step.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { FormationComponent } from './pages/formation/formation.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

import { ContactComponent } from './pages/contact/contact.component';
import { ProjectComponent } from './components/project/project.component';





@NgModule({
  declarations:[
    HomeComponent,
    HistoryComponent,
    ProfileComponent,
    AlbumComponent,
    StepComponent,
    CertificationsComponent,
    FormationComponent,
    PortfolioComponent,
    ContactComponent,
    ProjectComponent,


  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
  exports: [
    HistoryComponent,
    HomeComponent,
    ProfileComponent,
    AlbumComponent,
    FormationComponent,
    PortfolioComponent,
    ProjectComponent


  ],

  providers: [],
})
export class UserModule { }
