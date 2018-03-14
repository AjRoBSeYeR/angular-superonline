import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../providers/servicio.service';
import { Tarea } from '../model/tarea';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit {

  // Variables
  idTarea: number;
  tarea: Tarea;
  respuesta: string;
  // Variables del DOM
  mostrarResultado;

  constructor( public servicioService: ServicioService ) {
    console.log('UnoComponent constructor()');
    this.tarea = null;
    this.respuesta = '';
  }

  ngOnInit() {
    this.mostrarResultado = document.getElementById('mostrarTarea');
  }

  /**
   * Obtener tarea por id
   * @param idTarea: id de la tarea que se quiere obtener
   */
  buscarTarea(idTarea: number) {

    this.servicioService.getTarea(idTarea).subscribe(
      resultado => {
        // tslint:disable-next-line:no-console
        console.debug('peticion correcta %o', resultado);
        // this.mapeo(resultado);
        this.respuesta = resultado.title;
      },
      error => {
        console.warn('peticion incorrecta %o', error);
        if ( error.status === 404 ) {
          this.respuesta = 'No existe tarea con el ID introducido';
        }
      }
    );
  }

  /**
   * Mapea los datos en formato JSON, que provienen del Servicio 'recetasService' Rest
   * @param result resultado de la petición (request)
   */
  mapeo( result: any ) {

    // Rellenar recetas
    // Recoger título de las tareas
    result.forEach(elem => {
      this.tarea = new Tarea(elem.title);
      this.tarea.id = elem.id;
      this.tarea.userId = elem.userId;
      this.tarea.completed = elem.completed;
    });
  }

}
