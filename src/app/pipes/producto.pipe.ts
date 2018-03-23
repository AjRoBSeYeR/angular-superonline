import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../model/producto';

@Pipe({
  name: 'filter'
})
export class ProductoPipe implements PipeTransform {

  /**
   * Filtro para buscar en una coleccion de Productos. No es CaseSensitive.
   * @param aProducto : Producto[]
   * @param searchText : string con el nombre de la receta 
   */
  transform(stock: Producto[], searchText: string ): Producto[] {  

    //si no hay productos retornar vacio
    if (!stock) return [];
    if(!searchText) return stock;
    searchText = searchText.toLowerCase();
    let nombreProducto = "";
    return stock.filter( productoIt => {
      nombreProducto = productoIt.nombre;        
      nombreProducto = nombreProducto.toLowerCase();
        return nombreProducto.includes(searchText);
    });

  }
}