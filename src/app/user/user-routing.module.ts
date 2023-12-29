import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { FormationComponent } from './pages/formation/formation.component';



const routes: Routes = [

  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'formation',
    component: FormationComponent,

  },
  {
    path: 'portfolio',
    component: FormationComponent,

  },
  {
    path: 'services',
    component: FormationComponent,

  },
  {
    path: 'contact',
    component: FormationComponent,

  },
  {
    path: '**',
    redirectTo: '/user/home'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
