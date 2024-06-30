import { Component, Input, OnInit } from '@angular/core';
import { Project, Projects } from '../../interfaces/project.interface';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'user-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {


    public projects:Project[]=[]
    public loading:Boolean=false


  @Input()
  public tittle: string[] = ['PORTAFOLIO']
  @Input()
  public icon:String='<i class="fa-solid fa-diagram-project"></i>'


  constructor(private userService: UserService) {

  }
  ngOnInit(): void {
    this.loading=true
    this.userService.getProjects()
      .subscribe((resp:Projects)=> {
        this.projects =resp.projects
        this.loading=false
        /* Codigo a mejorar para mostrar siempre el proyecto mas  */

      })
  }

}


