import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {



  title = 'dashboardPractic';

  public activeMenu:Boolean=false


  toogleMenu(){
    this.activeMenu=!this.activeMenu
  }



  clouseOverlay():void {
    this.activeMenu=false

  }

}
