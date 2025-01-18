import { AfterViewInit, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Experience, LogoCaroussel, navbarItem } from './interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'portfolio';
  private experienceItems?: NodeListOf<Element>;

  public navbarItems: navbarItem[] = [
    { name: 'Experiencia', hrefId: 'Experiencia'},
    { name: 'Proyectos', hrefId: 'Proyectos'},
    { name: 'Sobre mí', hrefId: 'SobreMi'},
    { name: 'Contacto', hrefId: 'Contacto'},
  ]

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

  public logosInfo : LogoCaroussel[] = [
    { src: '/assets/resources/TypeScript-3090624194.png', alt: 'Icono de Typescript'},
    { src: '/assets/resources/angular_black.png', alt: 'Icono de Angular'},
    { src: '/assets/resources/html.png', alt: 'Icono de HTML'},
    { src: '/assets/resources/icons8-mysql-logo-100.png', alt: 'Icono de Mysql'},
    { src: '/assets/resources/css.png', alt: 'Icono de CSS'},
    { src: '/assets/resources/ionic dark logo black.png', alt: 'Icono de Ionic'},
    { src: '/assets/resources/Git-Icon-Black.png', alt: 'Icono de Git'},
    { src: '/assets/resources/icons8-java-logo-50.png', alt: 'Icono de Java'},
    { src: '/assets/resources/vuejs.png', alt: 'Icono de Vue'},
  ];

  public isMenuOpen: boolean = false;

  ngOnInit(): void {
    
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    const body = document.body as HTMLElement;

    if (window.innerWidth >= 960) {
      if (!this.isMenuOpen) {
        document.body.classList.remove('no-scroll');
      }
  
      document.body.classList.add('no-scroll');
    }
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

    goToSection(id: string) {
      let el = document.getElementById(id);
      if(!el) return;
      window.scrollTo({
        left: el.offsetLeft,
        top: el.offsetTop,
        behavior: 'smooth'
      });
    }

}
