import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Caricaturas1Page } from './caricaturas1/caricaturas1.pages';
import { ProgramListComponent } from './caricaturas2/components/program-list/program-list.component';


const routes: Routes = [
  {path: "series", component: ProgramListComponent},
  {path: "personajes", component: Caricaturas1Page}
];

@NgModule({
  declarations: [],
  imports: 
    [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
