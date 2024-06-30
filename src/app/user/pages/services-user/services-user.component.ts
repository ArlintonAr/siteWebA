import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services-user',
  templateUrl: './services-user.component.html',
  styleUrl: './services-user.component.css'
})
export class ServicesUserComponent {

  @Input()
  public tittle:string[]=['SERVICIOS']

  @Input()
  public icon:string='<i class="fa-solid fa-laptop-file"></i>'
}
