import { AfterViewInit, Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';
  private experienceItems?: NodeListOf<Element>;

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
