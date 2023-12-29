import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { TittleMenuComponent } from './components/tittle-menu/tittle-menu.component';
import { ButtonComponent } from './components/button/button.component';
import { SocialComponent } from './components/social/social.component';
import { SidebarMajorComponent } from './components/sidebar-major/sidebar-major.component';
import { ButtonToggleMenuComponent } from './components/button-toggle-menu/button-toggle-menu.component';
import { ButtomTechnologyComponent } from './components/buttom-technology/buttom-technology.component';




@NgModule({
  declarations:[
    SidebarComponent,
    TittleMenuComponent,
    ButtonComponent,
    SocialComponent,
    SidebarMajorComponent,
    ButtonToggleMenuComponent,
    ButtomTechnologyComponent,

  ],
  imports: [
    RouterModule
  ],
  exports: [
    SidebarComponent,
    TittleMenuComponent,
    ButtonComponent,
    SocialComponent,
    SidebarMajorComponent,
    ButtonToggleMenuComponent,
    ButtomTechnologyComponent
  ],

  providers: [],
})
export class SharedModule { }
