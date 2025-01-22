import { Component } from '@angular/core';
import { StackLogo } from '../../interfaces/interfaces';

@Component({
  selector: 'stack',
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.scss'
})
export class StackComponent {

  public logosInfo : StackLogo[] = [
    { src: '/assets/svg/Typescript-logo.svg', alt: 'Icono de Typescript', color: 'rgba(255, 219, 46, 0.5)'},
    { src: '/assets/svg/Angular-logo.svg', alt: 'Icono de Angular', color: 'rgba(157, 2, 8, 0.5)'},
    { src: '/assets/svg/Mysql-logo.svg', alt: 'Icono de Mysql', color: 'rgba(0, 165, 207, 0.5)'},
    { src: '/assets/svg/Html-logo.svg', alt: 'Icono de HTML', color: 'rgba(4, 102, 200, 0.5)'},
    { src: '/assets/svg/CSS-3-logo.svg', alt: 'Icono de CSS', color: 'rgba(255, 219, 46, 0.5)'},
    { src: '/assets/svg/Ionic-logo.svg', alt: 'Icono de Ionic', color: 'rgba(0, 165, 207, 0.5)'},
    { src: '/assets/svg/Git-logo.svg', alt: 'Icono de Git', color: 'rgba(4, 102, 200, 0.5)'},
    { src: '/assets/svg/Java-logo.svg', alt: 'Icono de Java', color: 'rgba(157, 2, 8, 0.5)'},
    { src: '/assets/svg/Vue-js-logo.svg', alt: 'Icono de Vue', color: 'rgba(88, 157, 125, 0.6)'},
    { src: '/assets/svg/Javascript-logo.svg', alt: 'Icono de Javascript', color: 'rgba(255, 219, 46, 0.5)'},
  ];

  getShadow(color: string):string {
    return `drop-shadow(0 2px 3px ${color})`;
  }

}
