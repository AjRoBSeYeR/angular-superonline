import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Importar formularios para usar propiedades *ng
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Importar modulo HTTP
import { HttpClientModule } from '@angular/common/http';

// Pipes
import { FilterViviendas } from './pipes/filter-viviendas.pipe';
// Componentes
import { AppComponent } from './app.component';
import { UnoComponent } from './uno/uno.component';
// Servicios
import { ServicioService } from './providers/servicio.service';
import { InmobiliariaComponent } from './inmobiliaria/inmobiliaria.component';
import { ViviendaComponent } from './inmobiliaria/vivienda/vivienda.component';
import { ViviendasService } from './providers/viviendas.service';



@NgModule({
  declarations: [
    // Pipes
    FilterViviendas,
    // Componentes
    AppComponent,
    UnoComponent,
    InmobiliariaComponent,
    ViviendaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    HttpClientModule,
    ServicioService,
    ViviendasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
