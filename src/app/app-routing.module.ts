import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/portfolio/home/home.component';

const routes: Routes = [
    {
      path:'',
      component: HomeComponent,
      loadChildren:() => import('./modules/portfolio/portfolio.module').then(m => m.PortfolioModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
