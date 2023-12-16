import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AlbumComponent } from './components/album/album.component';




@NgModule({
  declarations:[
    HomeComponent,
    HistoryComponent,
    ProfileComponent,
    AlbumComponent,
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
    AlbumComponent
  ],

  providers: [],
})
export class UserModule { }
