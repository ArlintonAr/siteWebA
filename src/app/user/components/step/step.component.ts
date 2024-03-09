import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-step',
  templateUrl: './step.component.html',
  styleUrl: './step.component.css'
})
export class StepComponent {


@Input() public institutionData:any=[]
}
