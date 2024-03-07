import { Component, Input, OnInit } from '@angular/core';
import { Certification, Certifications } from '../../interfaces/certification.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user-formation',
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.css'
})
export class FormationComponent implements OnInit {

  public certifications:Certification[]=[]

  @Input()
  public tittle:String[]=['EDUCACIÓN']


  constructor(private userService:UserService){}

  ngOnInit(): void {

    this.userService.getCertifications()
    .subscribe((res:Certifications)=>{
      this.certifications=res.certification
      console.log(this.certifications)
    })

  }


}
