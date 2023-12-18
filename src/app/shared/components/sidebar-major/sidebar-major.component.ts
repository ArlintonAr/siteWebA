import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'shared-sidebar-major',
  templateUrl: './sidebar-major.component.html',
  styleUrl: './sidebar-major.component.css'
})
export class SidebarMajorComponent {



  constructor(private appComponent: AppComponent) {

  }

  clouseMenu():void {
    this.appComponent.activeMenu=false
  }

}
