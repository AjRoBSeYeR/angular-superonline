export class Servicio {

    // Atributos
    nombre: string;
    disponible: boolean;

    constructor(
        nombre: string,
        disponible: boolean = false
    ) {
        console.log('Servicio.constructor( nombre )');

        this.nombre = nombre,
        this.disponible = disponible;
    }

}
