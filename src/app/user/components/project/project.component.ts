import { Component } from '@angular/core';

import { Project, Projects } from '../../interfaces/project.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

  public projects:Project[]=[]

  constructor(private userService: UserService) {

  }
  ngOnInit(): void {
    this.userService.getProjects()
      .subscribe((resp:Projects)=> {
        this.projects =resp.projects
        console.log(this.projects)
      })
  }

}
