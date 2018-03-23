import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';
import { MOCKS_SUPERMERCADO } from './mocks.supermercado';
//import { element } from 'protractor';

@Injectable()
export class ProductoService {

  //declaro una variable, de tipo array de producto, y la inicializo vacía
  stock: Producto[];
    
  constructor() {
    console.log('ProductoService constructor');    
    this.stock = [];  
  }

  //Devuelve todos los productos que tenemos en el supermercado
  getAll() : Producto[]{
     
    let jsonData = JSON.parse(MOCKS_SUPERMERCADO.supermercado);
    jsonData.forEach( element => {
        let producto = new Producto(                         
                          element.nombre, 
                          element.precio, 
                          element.precioOferta,
                          element.oferta, 
                          element.cantidad,
                          element.foto,
                          element.descripcion,
                          element.id
                        );
                          
          this.stock.push( producto );                          
    });                          
    return this.stock;

  }

}//fin class ProductoService


