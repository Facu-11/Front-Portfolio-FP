import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { BannerComponent } from './banner/banner.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { LogoAPComponent } from './logo-ap/logo-ap.component';
import { FormsModule } from '@angular/forms';
import { EditeducacionComponent } from './educacion/editeducacion.component';
import { NeweducacionComponent } from './educacion/neweducacion.component';
import { NewproyectosComponent } from './proyectos/newproyectos.component';
import { EditProyectosComponent } from './proyectos/editproyectos.component';
import { NewskillsComponent } from './skills/newskills.component';
import { EditskillsComponent } from './skills/editskills.component';


@NgModule({
  declarations: [
    
            BannerComponent,
            AcercaDeComponent,
            LogoAPComponent,
            ExperienciaComponent,
            EducacionComponent,
            SkillsComponent,
            FooterComponent,
            HeaderComponent,
            HomeComponent,
            ProyectosComponent,

            NeweducacionComponent,
            EditeducacionComponent,
            NewproyectosComponent,
            EditProyectosComponent,
            NewskillsComponent,
            EditskillsComponent,

            
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    FormsModule
  ]
})
export class PortfolioModule { }
