import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoosePersComponent } from './choose-pers/choose-pers.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';

import { ProfilComponent } from './profil/profil.component';
import { SignupEnseignantComponent } from './signup-enseignant/signup-enseignant.component';
import { AboutComponent } from './about/about.component';
import { CoursComponent } from './cours/cours.component';



const routes: Routes = [
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'choosePers', component: ChoosePersComponent },
  { path: 'signup-enseignant', component: SignupEnseignantComponent},
  { path: 'about', component: AboutComponent},
  { path: 'cours', component: CoursComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
