import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArbitreComponent } from './component/arbitre/arbitre.component';
import { ListeArbitreComponent } from './component/liste-arbitre/liste-arbitre.component';
import {AddarbitreComponent} from './component/addarbitre/addarbitre.component';

const routes: Routes = [
  {path: '', component: ArbitreComponent },
  {path: 'arbitres', component: ListeArbitreComponent },
  {path: 'app-addarbitre', component: AddarbitreComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
