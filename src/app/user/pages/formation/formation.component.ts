import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-formation',
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.css'
})
export class FormationComponent {
  @Input()
  public tittle:String[]=['EDUCACIÓN']
}
