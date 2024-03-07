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



  @Input()
  public tittle: string[] = ['PORTAFOLIO']



  constructor(private userService: UserService) {

  }
  ngOnInit(): void {
    this.userService.getProjects()
      .subscribe((resp:Projects)=> {
        this.projects =resp.projects

        /* Codigo a mejorar para mostrar siempre la aplicacion mas llamativa */
        if (this.projects.length > 1 && this.projects.length >= 3) {
          const temp = this.projects[0];
          this.projects[0] = this.projects[1];
          this.projects[1] = temp;
      }
        console.log(this.projects)
      })
  }

}
