import { Pipe, PipeTransform } from '@angular/core';
import { Vivienda } from '../model/vivienda';

@Pipe({name: 'filterViviendas'})
export class FilterViviendas implements PipeTransform {

  transform(viviendas: Vivienda[], searchText: string, filtroLista: string, precioMin: number, precioMax: number): Vivienda[] {
    // tslint:disable-next-line:no-console
    console.debug(`FilterViviendas  \n
        searchText: ${searchText}   \n
        filtroLista: ${filtroLista} \n
        precio minimo: ${precioMin} \n
        precio máximo: ${precioMax}
    `);

    // Variables
    let resultado = '';
    // Lista auxiliar para cada filtrado
    let auxList: Vivienda[] = [];
    let listaFiltrada: Vivienda[] = [];

    // Si no hay resultado --> devolver vacio
    if (!viviendas) { return []; }

    if (filtroLista === 'alquiler') {
        viviendas.forEach(element => {
            if (element.alquiler) {
                auxList.push(element);
            }
        });
        listaFiltrada = auxList.slice();
        auxList = [];
    } else if (filtroLista === 'compra') {
        viviendas.forEach(element => {
            if (!element.alquiler) {
                auxList.push(element);
            }
        });
        listaFiltrada = auxList.slice();
        auxList = [];
    } else {
        listaFiltrada = viviendas.slice();
    }

    // Filtrar por precio mínimo
    if ( precioMin ) {
        listaFiltrada.forEach(element => {
            if (element.precio >= precioMin) {
                auxList.push(element);
            }
        });
        // Lista con filtrado de precio mínimo
        listaFiltrada = auxList.slice();
        auxList = [];
    }

    // Filtrar por precio máximo
    if ( precioMax ) {
        listaFiltrada.forEach(element => {
            if (element.precio <= precioMax) {
                auxList.push(element);
            }
        });
        // Lista con filtrado de precio máximo
        listaFiltrada = auxList.slice();
        auxList = [];
    }

    // Si no hay texto para filtrar la búsqueda --> devolver todas las viviendas
    if (!searchText) {
        return listaFiltrada;
    } else {
        return listaFiltrada.filter( viviendaIter => {
            resultado = viviendaIter.nombre + viviendaIter.direccion;
            resultado = resultado.toLowerCase();
            resultado = this.replaceAcentos(resultado);
            return resultado.includes(searchText);
        });
    }
  }

  replaceAcentos(cadena: string) {
    cadena = cadena.replace(/á/gi, 'a');
    cadena = cadena.replace(/é/gi, 'e');
    cadena = cadena.replace(/í/gi, 'i');
    cadena = cadena.replace(/ó/gi, 'o');
    cadena = cadena.replace(/ú/gi, 'u');
    cadena = cadena.replace(/ñ/gi, 'n');
    return cadena;
}

}
