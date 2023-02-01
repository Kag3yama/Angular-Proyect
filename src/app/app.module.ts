import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { StudentsComponent } from './components/students/students.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { DirectivaPersonalizadaDirective } from './directives/directiva-personalizada.directive';
import { FormularioReactivoComponent } from './components/formulario-reactivo/formulario-reactivo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponent } from './components/material/material.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    StudentsComponent,
    DirectivasComponent,
    DirectivaPersonalizadaDirective,
    FormularioReactivoComponent,
    MaterialComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
