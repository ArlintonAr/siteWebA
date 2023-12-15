import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { TittleMenuComponent } from './components/tittle-menu/tittle-menu.component';
import { ButtonComponent } from './components/button/button.component';
import { SocialComponent } from './components/social/social.component';




@NgModule({
  declarations:[
    SidebarComponent,
    TittleMenuComponent,
    ButtonComponent,
    SocialComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    SidebarComponent,
    TittleMenuComponent,
    ButtonComponent,
    SocialComponent
  ],

  providers: [],
})
export class SharedModule { }
