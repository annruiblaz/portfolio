import { Component } from '@angular/core';
import { Experience } from '../../interfaces/interfaces';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  public experienceInfo: Experience[] = [
    {
      title: 'Junior Web Frontend',
      company: 'We Are Marketing - WAM Global',
      dates: 'Junio 2024 - Diciembre 2024'
    },
    {
      title: 'Prácticas en Web Frontend',
      company: 'We Are Marketing - WAM Global',
      dates: 'Marzo 2024 - Junio 2024'
    },
    {
      title: 'Práticas de SMR',
      company: 'Progresa Centro Integrado de Formación',
      dates: 'Marzo 2022 - Junio 2022'
    },
  ];
}
