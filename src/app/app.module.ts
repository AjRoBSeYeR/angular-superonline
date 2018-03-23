import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//componentes
import { AppComponent } from './app.component';
import { SupermercadoComponent } from './supermercado/supermercado.component';

//servicios
import { ProductoService } from './providers/producto.service';

//pipes
//pipes
import { ProductoPipe } from './pipes/producto.pipe';

import { FormsModule } from '@angular/forms';
import { CarritoComponent } from './supermercado/carrito/carrito.component';


@NgModule({
  declarations: [
    AppComponent,
    SupermercadoComponent,
    ProductoPipe,
    CarritoComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
