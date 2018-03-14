import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from '../../constantes';

// Endpoint del servidor
const END_POINT = 'http://192.168.0.42:3000';

@Injectable()
export class ViviendasService {

  constructor( public http: HttpClient ) {
    console.log('ViviendasService constructor(http)');
  }

  /**
   * Obtiene todas las viviendas del servidor
   */
  getAll(): Observable<any> {
    const url = GLOBAL.END_POINT + '/casas';
    console.log(`ViviendasService getAll() from ${url}`);

    return this.http.get(url);
  }

  getVivienda(id): Observable<any> {
    const url = GLOBAL.END_POINT + '/viviendas/' + id;
    console.log(`ViviendasService getVivienda() from ${url}`);

    return this.http.get(url);
  }

}
