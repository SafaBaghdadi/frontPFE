import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoosePersComponent } from './choose-pers/choose-pers.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';

import { ProfilComponent } from './profil/profil.component';
import { SignupEnseignantComponent } from './signup-enseignant/signup-enseignant.component';

import { CoursComponent } from './cours/cours.component';
import { NavbarVisiteurComponent } from './navbar-visiteur/navbar-visiteur.component';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';
import { EleveInterfComponent } from './eleve-interf/eleve-interf.component';



const routes: Routes = [
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'choosePers', component: ChoosePersComponent },
  { path: 'signup-enseignant', component: SignupEnseignantComponent},
 
  { path: 'cours', component: CoursComponent},
  { path: 'navbarVisiteur', component: NavbarVisiteurComponent},
  { path: 'navbarUser', component: NavbarUserComponent},
  { path: 'EleveInterf', component: EleveInterfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
