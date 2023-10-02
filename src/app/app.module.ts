import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Caricaturas2Module } from "./caricaturas2/components/caricaturas2.module";
import { Caricaturas1Module } from "./caricaturas1/caricaturas1.module";
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { InformacionAlumnoModule } from './informacion-alumno/informacion-alumno.module';
import { CaricaturasComponent } from './caricaturas/caricaturas.component';



@NgModule({
    declarations: [
        AppComponent,
        MenuSuperiorComponent,
        CaricaturasComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        Caricaturas2Module,
        Caricaturas1Module,
        InformacionAlumnoModule
    ]
})
export class AppModule { }
