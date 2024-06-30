import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-tittle-menu',
  templateUrl: './tittle-menu.component.html',
  styleUrl: './tittle-menu.component.css'
})
export class TittleMenuComponent {


  @Input()
  public contentParagraph:String=''

  @Input()
  public iconContent:String=''
}
