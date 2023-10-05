import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Caricaturas1Page } from './caricaturas1/caricaturas1.pages';
import { Caricaturas2Page } from './caricaturas2/caricaturas2.pages';
import { InformacionAlumnoPage } from './informacion-alumno/informacion-alumno.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path: "series", component: Caricaturas2Page},
  {path: "personajes", component: Caricaturas1Page},
  /*{path: "", component: Caricaturas2Page},*/
  {path: "", redirectTo: "series", pathMatch: "full"},
  {path: "not-found", component: NotFoundComponent},
  {path: "**", redirectTo: "not-found", pathMatch: "full"}
];

@NgModule({
  declarations: [],
  imports: 
    [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }