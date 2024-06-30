import { Component } from '@angular/core';

@Component({
  selector: 'user-skill',
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent {

  public skills = [
    {
      name: 'Angular',
      image: '../../../../assets/img/skills/angular.png'
    },
    {
      name: 'JavaScript',
      image: '../../../../assets/img/skills/javaScript.png'
    },
    {
      name: 'TypeScript',
      image: '../../../../assets/img/skills/typeScript.svg'
    },
    {
      name: 'Git-GitHub',
      image: '../../../../assets/img/skills/gitHub.png'
    },
    {
      name: 'Node JS',
      image: '../../../../assets/img/skills/nodejs.png'
    },
    {
      name: 'Nest Js',
      image: '../../../../assets/img/skills/nestjs.png'
    },
    {
      name: 'SQL',
      image: '../../../../assets/img/skills/sql.svg'
    },
    {
      name: 'PostgreSQL',
      image: '../../../../assets/img/skills/postgreSql.png'
    },
    {
      name: 'Figma',
      image: '../../../../assets/img/skills/figma.png'
    },
    {
      name: 'Illustrator',
      image: '../../../../assets/img/skills/illustrator.png'
    },
    {
      name: 'Photoshop',
      image: '../../../../assets/img/skills/photoshop.png'
    },


  ]



}
