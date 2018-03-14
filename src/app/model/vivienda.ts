import { Servicio } from './servicio';

export class Vivienda {

    // Atributos
    nombre: string;
    precio: number;
    alquiler: boolean;
    habitaciones: number;
    foto: string;
    direccion: string;
    servicios: Servicio[];
    id: number;

    constructor(
        nombre: string,
        precio: number,
        alquiler: boolean,
        habitaciones: number,
        foto: string,
        direccion: string,
        servicios: Servicio[],
        id: number = -1
    ) {
        console.log('Vivienda.constructor( nombre )');

        this.nombre = nombre,
        this.precio = precio ? precio : 0;
        this.alquiler = alquiler ? alquiler : false;
        this.habitaciones = habitaciones ? habitaciones : 0;
        this.foto = foto ? foto : 'assets/img/default_house.png';
        this.direccion = direccion ? direccion : '';
        this.servicios = [];
        this.id = id ? id : -1;

    }

    /**
     * Añadir los servicios
     */
    addServicios( servicio: Servicio ) {
        this.servicios.push(servicio);
    }

}
