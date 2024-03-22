import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
// Définir une propriété pour suivre l'état du menu mobile
isMobileNavOpen: boolean = false;

// Fonction pour basculer l'état du menu mobile
toggleMobileNav() {
  console.log('Mobile nav toggled');
  this.isMobileNavOpen = !this.isMobileNavOpen;
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  if (mobileNavToggle) {
    mobileNavToggle.classList.toggle('bi-x', this.isMobileNavOpen);
  }
}
}
