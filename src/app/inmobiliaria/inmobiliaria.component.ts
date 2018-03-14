import { Component, OnInit } from '@angular/core';
// Importar jQuery > npm install --save-dev jquery
import * as $ from 'jquery';
import { Vivienda } from '../model/vivienda';
import { ViviendasService } from '../providers/viviendas.service';

@Component({
  selector: 'app-inmobiliaria',
  templateUrl: './inmobiliaria.component.html',
  styleUrls: ['./inmobiliaria.component.scss']
})
export class InmobiliariaComponent implements OnInit {

  // Atributos
  listaViviendas: Vivienda[] = [];
  listaAlquiler: Vivienda[];
  listaCompra: Vivienda[];

  vivienda: Vivienda;
  temp = null;

  constructor( public viviendasService: ViviendasService ) {
    this.vivienda = new Vivienda('Vivienda', 0, false, 0, 'assets/img/default_house.png', '', null, -1);
    this.temp = null;
  }

  ngOnInit() {
    console.log('InmobiliariaComponent ngOnInit()');
    // Código jquery para el slider de #rango-precio
    // $('#ex12b').slider({ id: 'slider12b', min: 0, max: 500000, range: true, value: [0, 500000] });

    this.cargarViviendas();
  }


  /**
   * Obtener lista de viviendas del servidor
   */
  cargarViviendas() {
    this.viviendasService.getAll().subscribe(
      resultado => {
        // tslint:disable-next-line:no-console
        console.debug('peticion correcta %o', resultado);
        this.mapeo(resultado);
        if (this.vivienda.nombre === 'Vivienda' ) {
          this.vivienda = this.listaViviendas[0];
        }
      },
      error => {
        console.warn('peticion incorrecta %o', error);
      }
    );
  }

  /**
   * Mapea los datos en formato JSON, que provienen del Servicio 'viviendasService' Rest
   * @param result resultado de la petición (request)
   */
  mapeo( result: any ) {
    let vivienda: Vivienda;

    result.forEach(element => {
      vivienda = new Vivienda(
                              element.nombre,
                              element.precio,
                              element.alquiler,
                              element.habitaciones,
                              element.foto,
                              element.direccion,
                              element.id
                            );
                            vivienda.servicios = element.servicios;

      this.listaViviendas.push(vivienda);
    });

  }

  /**
   * Mostrar la vivienda seleccionada en el componente hijo 'ViviendaDetalle'
   * @param event : elemento activo
   * @param elem : vivienda seleccionada
   */
  select(event, elem) {
    console.log('InmobiliariaComponent select($event, elem)');
    console.log('$event.target: %o', event);
    console.log('elem: %o', elem);
    this.vivienda = elem;
    if (this.temp != null) {
      this.temp.classList.remove('seleccionado');
    }
    // Verificar que el event sea el elemento.card
    while (!event.className.includes('miniatura')) {
      event = event.parentElement;
    }
    event.classList.add('seleccionado');
    this.temp = event;
  }

}
