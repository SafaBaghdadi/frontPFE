import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-visiteur',
  templateUrl: './navbar-visiteur.component.html',
  styleUrls: ['./navbar-visiteur.component.css']
})
export class NavbarVisiteurComponent {
 // Définir une propriété pour suivre l'état du menu mobile
 isMobileNavOpen: boolean = false;

 constructor() {}

 // Fonction pour basculer l'état du menu mobile
 toggleMobileNav() {
   console.log('Mobile nav toggled');
   this.isMobileNavOpen = !this.isMobileNavOpen;
   const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
   if (mobileNavToggle) {
     mobileNavToggle.classList.toggle('bi-x', this.isMobileNavOpen);
   }
 }
 // Fonction pour déplacer la vue vers une section spécifique
 scrollToSection(sectionId: string) {
  const section = document.querySelector(`#${sectionId}`);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
}
