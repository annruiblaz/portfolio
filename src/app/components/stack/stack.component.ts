import { Component } from '@angular/core';
import { StackLogo } from '../../interfaces/interfaces';

@Component({
  selector: 'stack',
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.scss'
})
export class StackComponent {

  public logosInfo : StackLogo[] = [
    { src: '/assets/svg/Typescript-logo.svg', alt: 'Icono de Typescript', color: '#3178C6'},
    { src: '/assets/svg/Angular-logo.svg', alt: 'Icono de Angular', color: '#b52e31'},
    { src: '/assets/svg/Html-logo.svg', alt: 'Icono de HTML', color: 'linear-gradient(180deg, rgba(227,76,38,1) 0%, rgba(240,101,41,1) 100%)'},
    { src: '/assets/svg/css-logo.svg', alt: 'Icono de CSS', color: 'linear-gradient(180deg, rgba(38,77,228,1) 0%, rgba(41,101,241,1) 100%)'},
    { src: '/assets/svg/Ionic-logo.svg', alt: 'Icono de Ionic', color: '#498aff'},
    { src: '/assets/svg/Git-logo.svg', alt: 'Icono de Git', color: '#f1502f'},
    { src: '/assets/svg/Java-logo.svg', alt: 'Icono de Java', color: 'rgba(0,115,150,1)'},
    { src: '/assets/svg/Vue-js-logo.svg', alt: 'Icono de Vue', color: 'linear-gradient(180deg, rgba(52,73,94,1) 0%, rgba(65,184,131,1) 100%)'},
    { src: '/assets/svg/Javascript-logo.svg', alt: 'Icono de Javascript', color: '#f0db4f'},
    { src: '/assets/svg/Figma-logo.svg', alt: 'Icono de Figma', color: 'linear-gradient(180deg, rgba(242,78,30,1) 0%, rgba(255,114,98,1) 19%, rgba(162,89,255,1) 50%, rgba(26,188,254,1) 69%, rgba(10,207,131,1) 83%)'},
    { src: '/assets/svg/Sass-logo.svg', alt: 'Icono de Sass', color: '#CD6799'},
    { src: '/assets/svg/Postman-logo.svg', alt: 'Icono de Postman', color: '#EF5B25'},

  ];

  getShadow(color: string):string {
    return `drop-shadow(0 2px 3px ${color})`;
  }

}
