import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/pages/login.component';
import { EditeducacionComponent } from './modules/portfolio/educacion/editeducacion.component';
import { NeweducacionComponent } from './modules/portfolio/educacion/neweducacion.component';
import { HomeComponent } from './modules/portfolio/home/home.component';
import { EditProyectosComponent } from './modules/portfolio/proyectos/editproyectos.component';
import { NewproyectosComponent } from './modules/portfolio/proyectos/newproyectos.component';
import { EditskillsComponent } from './modules/portfolio/skills/editskills.component';
import { NewskillsComponent } from './modules/portfolio/skills/newskills.component';

const routes: Routes = [
    {
      path:'',
      component: HomeComponent,
      loadChildren:() => import('./modules/portfolio/portfolio.module').then(m => m.PortfolioModule)
    },
    // {
    //   path:'login',
    //   loadChildren:() => import ('./modules/login/login.module').then(m=> m.LoginModule)
    // },
    { path : 'login', component : LoginComponent},
    { path : 'nuevopro', component: NewproyectosComponent},
    { path : 'editpro', component : EditProyectosComponent },
    { path: 'nuevaedu', component: NeweducacionComponent},
    { path: 'editedu/:id', component: EditeducacionComponent},
    { path: 'newskill', component: NewskillsComponent},
    { path: 'editskill/:id', component: EditskillsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
