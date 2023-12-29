import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {


  @Input()
  public tittle:string[]=['PORTAFOLIO']
}
