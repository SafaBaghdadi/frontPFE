import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { ChoosePersComponent } from './choose-pers/choose-pers.component';
import { SignupEnseignantComponent } from './signup-enseignant/signup-enseignant.component';
import { HomeComponent } from './home/home.component';

import { CoursComponent } from './cours/cours.component';
import { NavbarVisiteurComponent } from './navbar-visiteur/navbar-visiteur.component';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';
import { EleveInterfComponent } from './eleve-interf/eleve-interf.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    ProfilComponent,
    ChoosePersComponent,
    SignupEnseignantComponent,
    HomeComponent,
   
    CoursComponent,
    NavbarVisiteurComponent,
    NavbarUserComponent,
    EleveInterfComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
