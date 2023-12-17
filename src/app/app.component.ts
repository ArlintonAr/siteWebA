import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dashboardPractic';

  public activeMenu:Boolean=false
  public disableMenu:Boolean=true
  toogleMenu(){
    this.activeMenu=!this.activeMenu
  }

}
