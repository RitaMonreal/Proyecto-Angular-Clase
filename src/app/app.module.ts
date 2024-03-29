import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Caricaturas2Module } from "./caricaturas2/caricaturas2.module";
import { Caricaturas1Module } from "./caricaturas1/caricaturas1.module";
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { InformacionAlumnoModule } from './informacion-alumno/informacion-alumno.module';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
    declarations: [
        AppComponent,
        MenuSuperiorComponent,
        NotFoundComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        Caricaturas2Module,
        Caricaturas1Module,
        InformacionAlumnoModule,
        AppRoutingModule
    ]
})
export class AppModule { }