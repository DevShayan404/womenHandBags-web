import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  scrolled: boolean = false;

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   const scrollPosition =
  //     window.scrollY ||
  //     window.pageYOffset ||
  //     document.documentElement.scrollTop ||
  //     0;
  //   this.scrolled = scrollPosition > 0;
  // }
}
