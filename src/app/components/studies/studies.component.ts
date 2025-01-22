import { Component } from '@angular/core';
import { Study } from '../../interfaces/interfaces';

@Component({
  selector: 'studies',
  templateUrl: './studies.component.html',
  styleUrl: './studies.component.scss'
})
export class StudiesComponent {

  public studies: Study[] = [
    {
      logo: '/assets/images/graduation-hat.png',
      location: 'Progresa Centro Integrado de Formación',
      name: 'CFGS Desarrollo de Aplicaciones Multiplataforma',
      date: '2022 - 2024'
    },
    {
      logo: '/assets/images/graduation-hat.png',
      location: 'Progresa Centro Integrado de Formación',
      name: 'CFGM Sistemas Microinformáticos y Redes',
      date: '2020 - 2022'
    },
    {
      logo: '/assets/images/graduation-hat.png',
      location: 'IES Enrique Tierno Galván',
      name: 'Bachillerato Ciencias Sociales',
      date: '2018 - 2020'
    },
  ];

}
