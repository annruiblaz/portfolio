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
    { name: 'Proyectos', hrefId: 'Proyectos'},
    { name: 'Sobre mí', hrefId: 'SobreMi'},
    { name: 'Contacto', hrefId: 'Contacto'},
  ];

  public isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    const body = document.body as HTMLElement;

    if (window.innerWidth <= 960) {
      if (!this.isMenuOpen) {
        document.body.classList.remove('no-scroll');
        return;
      }

      document.body.classList.add('no-scroll');
    }
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
