import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Producto } from '../model/producto';
import { ProductoService } from '../providers/producto.service';


@Component({
  selector: 'app-supermercado',
  templateUrl: './supermercado.component.html',
  styleUrls: ['./supermercado.component.scss']
})
export class SupermercadoComponent implements OnInit {

  stock: Producto[];
  carrito: Producto[];
  subtotal: number;
  descuentos: number;
  total: number;
 
   //inyectamos para poder usar este servicio en el supermercado
  constructor( public productoService: ProductoService) {    
    console.log('SupermercadoComponent constructor');        
    this.stock = [];     
    this.carrito = [];  
    this.total = 0;
    this.subtotal = 0;
    this.descuentos = 0;
  }

   //llamadas a los servicios
  ngOnInit() {
    console.log('SupermercadoComponent ngOnInit'); 
    this.stock   = this.productoService.getAll();       
  }

  
  //sumar cantidad del producto
  masCantidad(producto:Producto) {
    console.log("SupermercadoComponent masCantidad");
    producto.cantidad++;
    this.totalCarrito();    
  }

  // restar cantidad del producto
  menosCantidad(producto:Producto) {
    console.log("SupermercadoComponent menosCantidad");    
    if (producto.cantidad > 1) {        
        producto.cantidad--;        
        this.totalCarrito();
    }else{
      console.warn('    cantidad < 1');
    }
  }

  //añadir producto al carrito
  anadirProductoCarro(producto: Producto): void {  
    console.log('SupermercadoComponent anadirProductoCarro');
    //comprobar que no exista el producto, en tal caso eliminar
    this.carrito = this.carrito.filter(el=>{ 
      console.warn('   existia producto eliminado del carro');
      return (el.id !== producto.id); 
    });

    this.carrito.push(producto);    
    this.totalCarrito();
    console.log('ProductoComponent añadir producto al carro %o', this.carrito);
  }

  cambioCarrito( event ){
    console.log('ProductoComponent cambioCarrito operacion: %i producto: %o', event.operacion, event.producto);
    let op = event.operacion;
    let p  = event.producto;
    switch(op) { 
      case 1: { 
        console.log('ProductoComponent cambioCarrito menos cantidad');
        this.carrito.forEach( el => {
          if ( el.id === p.id ){
            el.cantidad--;
            return false;
          }
        });
        break;
      }      

      case 2: { 
        console.log('ProductoComponent cambioCarrito mas candidad');
        this.carrito.forEach( el => {
          if ( el.id === p.id ){
            el.cantidad++;
            return false;
          }
        });        
        break; 
      } 
      case 3: { 
        console.log('ProductoComponent cambioCarrito eliminar');
        this.carrito = this.carrito.filter(el=>{ 
          return (el.id !== p.id); 
        });
        break; 
     }
      default: { 
        console.warn('ProductoComponent cambioCarrito operacion no soportada');
         break; 
      } 
   } 
   this.totalCarrito();

  }

  totalCarrito(){    
    console.log('    reclacular totales');
    let _total = 0;
    let _descuentos = 0;
    let _subtotal = 0;
    for(let producto of this.carrito){
      if(producto.oferta > 0){        
        _descuentos += ((producto.precio * producto.oferta)/100 ) * producto.cantidad;
        _total += ( producto.precio - ( (producto.precio * producto.oferta)/100 )) * producto.cantidad;
      }else{
        _total += producto.precio * producto.cantidad;  
      }      
      _subtotal += producto.precio * producto.cantidad;  
    }
    this.total = _total;
    this.subtotal = _subtotal;
    this.descuentos = _descuentos;
  } 

  
}//fin class ProductoComponent




