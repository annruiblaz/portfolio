import { Component } from '@angular/core';
import { navbarItem } from '../../interfaces/interfaces';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public navbarItems: navbarItem[] = [
    { name: 'Experiencia', hrefId: 'Experiencia'},
    { name: 'Tecnologías', hrefId: 'Tecnologias'},
    { name: 'Proyectos', hrefId: 'Proyectos'},
    { name: 'Formación', hrefId: 'Formacion'}
  ];

  public isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    const body = document.body as HTMLElement;

    if (window.innerWidth <= 960) {
      body.classList.toggle('no-scroll', this.isMenuOpen);
    }
  }

  goToSection(id: string) {
    if(window.innerWidth <= 960) {
      this.toggleMenu();
    }

    let el = document.getElementById(id);
    if(!el) return;

    window.scrollTo({
      left: el.offsetLeft,
      top: el.offsetTop,
      behavior: 'smooth'
    });
  }
}
