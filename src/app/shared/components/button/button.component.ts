import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {


  @Input()
  public textButton:String=''
  @Input()
  public contentIcon:String=''
}
