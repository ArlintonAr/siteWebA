import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { FormationComponent } from './pages/formation/formation.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ServicesUserComponent } from './pages/services-user/services-user.component';
import { ContactComponent } from './pages/contact/contact.component';



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
    component: PortfolioComponent,

  },
  {
    path: 'services',
    component: ServicesUserComponent,

  },
  {
    path: 'contact',
    component: ContactComponent,

  },
  {
    path: '**',
    redirectTo: '/arlinton/home'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
