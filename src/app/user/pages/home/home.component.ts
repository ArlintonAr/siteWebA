import { Component, Input } from '@angular/core';

@Component({
  selector: 'person-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  @Input()
  public tittle:String[]=['INICIO','ACERCA DE MÍ', 'EDUCACIÓN','PROYECTOS','SERVICIOS', 'CONTACTO']

  @Input()
  public icon:String='<i class="fa-solid fa-house">'
}
