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
  public loading:Boolean=false
  public listInstitutions=[
    {
      date:'2014-2020',
      career:'Ingeniería de Sistemas',
      name:'Universidad Nacional Pedro Ruiz Gallo'
    },
    {
      date:'2006-2010',
      career:'Formación Secundaria',
      name:'Institución Educativa Augusto Salazar Bondy'
    },
    {
      date:'2000-2005',
      career:'Formación Primaria',
      name:'Institución Educativa 10508 – San José'
    }
  ]


  @Input()
  public tittle:String[]=['EDUCACIÓN']
  @Input()
  public icon:String ='<i class="fa-solid fa-graduation-cap"></i>'

  constructor(private userService:UserService){}

  get institutions(){
    return this.listInstitutions
  }

  ngOnInit(): void {
    this.loading=true

    this.userService.getCertifications()
    .subscribe((res:Certifications)=>{
      this.certifications=res.certification

      this.loading=false
      /* console.log(this.certifications) */
    })

  }




  }


