import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Caricaturas1Page } from './caricaturas1/caricaturas1.pages';
import { Caricaturas2Page } from './caricaturas2/caricaturas2.pages';


const routes: Routes = [
  {path: "series", component: Caricaturas2Page},
  {path: "personajes", component: Caricaturas1Page}
];

@NgModule({
  declarations: [],
  imports: 
    [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }