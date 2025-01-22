import { AfterViewInit, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { LogoCaroussel } from './interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'portfolio';
  private experienceItems?: NodeListOf<Element>;



  public logosInfo : LogoCaroussel[] = [
    { src: '/assets/svg/Typescript-logo.svg', alt: 'Icono de Typescript'},
    { src: '/assets/svg/Angular-logo.svg', alt: 'Icono de Angular'},
    { src: '/assets/svg/Html-logo.svg', alt: 'Icono de HTML'},
    { src: '/assets/svg/Mysql-logo.svg', alt: 'Icono de Mysql'},
    { src: '/assets/svg/CSS-3-logo.svg', alt: 'Icono de CSS'},
    { src: '/assets/svg/Ionic-logo.svg', alt: 'Icono de Ionic'},
    { src: '/assets/svg/Git-logo.svg', alt: 'Icono de Git'},
    { src: '/assets/svg/Java-logo.svg', alt: 'Icono de Java'},
    { src: '/assets/svg/Vue-js-logo.svg', alt: 'Icono de Vue'},
    { src: '/assets/svg/Javascript-logo.svg', alt: 'Icono de Javascript'},
  ];

  ngOnInit(): void {
    
  }

  isElementInViewport(el: Element):boolean {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 && rect.bottom <= window.innerHeight
        );
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll(): void {
    if (!this.experienceItems) return;
    this.experienceItems.forEach((item) => {
      if (this.isElementInViewport(item)) {
        item.classList.add('animation');
      } else {
        item.classList.remove('animation');
      }
    });
  }

    ngAfterViewInit(): void {
      this.experienceItems = document.querySelectorAll(".experience-content-item");
    }
}
