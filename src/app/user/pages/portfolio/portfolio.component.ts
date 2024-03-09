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



  constructor(private userService: UserService) {

  }
  ngOnInit(): void {
    this.loading=true
    this.userService.getProjects()
      .subscribe((resp:Projects)=> {
        this.projects =resp.projects
        this.loading=false
        /* Codigo a mejorar para mostrar siempre la aplicacion mas llamativa */
        if (this.projects.length > 1 && this.projects.length >= 3) {
          const randomIndex = Math.floor(Math.random() * (this.projects.length - 1)) + 1; // Genera un índice aleatorio entre 1 y n-1
          const temp = this.projects[0];
          this.projects[0] = this.projects[randomIndex];
          this.projects[randomIndex] = temp;
      }
        console.log(this.projects)
      })
  }

}


