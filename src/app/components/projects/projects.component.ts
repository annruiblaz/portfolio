import { Component } from '@angular/core';
import { Project } from '../../interfaces/interfaces';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  public projectItems: Project[] = [
    {
      title: 'PréstameYA!',
      subtitle: 'WebApp para facilitar tomar prestados objetos de amigos durante el tiempo acordado entre ambos.',
      img: ['assets/images/mockaup-prestameYa-1.png','assets/images/mockaup-prestameYa-2.png'],
      stackUsed: [
        { name: 'Angular', color: 'red'},
        { name: 'Ionic', color: 'blue'}
      ]

    }
  ];

}
