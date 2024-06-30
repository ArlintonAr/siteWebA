import { Component, Input } from '@angular/core';

@Component({
  selector: 'person-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {


  @Input()
  public tittle:String[]=['ACERCA DE MÍ']

  @Input()
  public icon:String='<i class="fa-solid fa-user"></i>'

}
