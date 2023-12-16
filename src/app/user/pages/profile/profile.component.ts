import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {




  @Input()
  public contentIcon:String[]=[`<i class="fa-solid fa-envelope"></i><p>ESCRÍBEME</p>`,]
}
