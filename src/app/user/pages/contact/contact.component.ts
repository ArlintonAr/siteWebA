import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {


  @Input()
  public titleContent:string[] =['CONTACTO']
  @Input()
  public icon:string =' <i class="fa-solid fa-envelope"></i>'
}
