import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar-major',
  templateUrl: './sidebar-major.component.html',
  styleUrl: './sidebar-major.component.css'
})
export class SidebarMajorComponent {

  public activeMenu:Boolean=true


  clouseMenu():void{
    this.activeMenu=!this.activeMenu
  }
}
