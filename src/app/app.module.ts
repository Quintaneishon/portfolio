import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AcademicaComponent } from './components/academica/academica.component';
import { LaboralComponent } from './components/laboral/laboral.component';
import { InteresesComponent } from './components/intereses/intereses.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    AcademicaComponent,
    LaboralComponent,
    InteresesComponent,
    HobbiesComponent,
    ContactoComponent,
    ProyectosComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
