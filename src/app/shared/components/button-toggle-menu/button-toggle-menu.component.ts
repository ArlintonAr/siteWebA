import { Component } from '@angular/core';

@Component({
  selector: 'shared-button-toggle-menu',
  templateUrl: './button-toggle-menu.component.html',
  styleUrl: './button-toggle-menu.component.css'
})
export class ButtonToggleMenuComponent {

  public activeMenu:Boolean=false

  toogleMenu():void{
    this.activeMenu=!this.activeMenu
  }
}
