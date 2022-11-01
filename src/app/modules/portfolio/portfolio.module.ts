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
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    FormsModule
  ]
})
export class PortfolioModule { }
