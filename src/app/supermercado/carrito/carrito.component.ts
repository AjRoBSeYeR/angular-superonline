import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ProductoService } from '../../providers/producto.service';
import { Producto } from '../../model/producto';



@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})

export class CarritoComponent implements OnInit { 
  
  @Input('carrito')carrito : Producto[];
  @Input('total')total : number;
  @Input('subtotal')subtotal : number;
  @Input('descuentos')descuentos : number;

  @Output() eventoEmitir = new EventEmitter();
 

  constructor(private productoService: ProductoService) {
    console.log('CarritoComopent constructor');    
    this.carrito = [];   
  }

  ngOnInit(): void {
    console.log('CarritoComopent onInit');   
  }
    
  menosCantidad(producto: Producto){
    console.log('CarritoComponent menosCantidad');    
    if ( producto.cantidad > 1 ){
      this.eventoEmitir.emit(  
        {
           "operacion": 1 ,
           "producto" : producto
        }
      );      
    }      
  }

  masCantidad(producto: Producto){
    console.log('CarritoComponent masCantidad');    
    this.eventoEmitir.emit(  
      {
         "operacion": 2 ,
         "producto" : producto
      }
    );  
  }
  
  eliminar(producto: Producto){
    console.log('CarritoComponent eliminar producto %o', producto);    
    this.eventoEmitir.emit(  //event con 2 parametros
      {
         "operacion": 3 ,
         "producto" : producto
      }
    );  
  }

}//fin class CarritoComponent




