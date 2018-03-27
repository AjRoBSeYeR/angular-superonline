import { ProductoService } from "../providers/producto.service";

export class Producto{

    //atributos
    id: number;
    nombre:string;
    precio:number;
    precioOferta:boolean;
    oferta:number;
    cantidad:number;
    foto:string;
    descripcion:string;
  
   constructor(nombre:string='anónimo', precio?:number ,precioOferta?:boolean, oferta?:number,cantidad?:number, foto?:string, descripcion?:string, id?:number ){
        console.log('Producto constructor');
        
        //inicializamos las variables
        this.nombre = nombre;
        if ( foto ){
            this.foto = foto;
        }else{
            this.foto = 'assets/producto_default.jpg';
        } 
       
        this.precio = precio;
        this.precioOferta = precioOferta;
        this.oferta = oferta;
        this.cantidad = 1;
        this.descripcion = descripcion;
        this.id=id;
        
    }

    static clone( pClone: Producto): Producto{

        let p = new Producto();
        p.id =  pClone.id;
        p.cantidad = pClone.cantidad;
        p.descripcion = pClone.descripcion;
        p.foto = pClone.foto;
        p.nombre = pClone.nombre;
        p.precio = pClone.precio;
        p.oferta = pClone.oferta;
        
        return p;
    }

}


