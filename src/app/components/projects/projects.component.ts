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
      img: ['assets/images/Mockup-PrestameYa-1.png','assets/images/Mockup-PrestameYa-2.png'],
      stackUsed: [
        { name: 'Angular', color: 'red'},
        { name: 'Ionic', color: 'blue'}
      ]
    },
    {
      title: 'Country SPA',
      subtitle: 'Web creada como parte del curso de Udemy de Fernando Herrera, para buscar países y visualizar su información. Con estilos y funcionalidades propias añadidas.',
      img: ['assets/images/Mockup-CountrySPA-1.png','assets/images/Mockup-CountrySPA-2.png'],
      urlDemo: 'https://annruiblaz.github.io/03-country-spa/countries/by-country',
      urlGithub: 'https://github.com/annruiblaz/03-country-spa',
      stackUsed: [
        { name: 'Angular', color: 'red'}
      ]
    }
  ];

}
