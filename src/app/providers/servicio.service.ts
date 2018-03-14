import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

// Endpoint del servidor
const END_POINT = 'http://192.168.0.42:3000';

@Injectable()
export class ServicioService {

  constructor( public http: HttpClient ) {
    console.log('ServicioService constructor(http)');
  }

  getTarea(id): Observable<any> {
    const url = END_POINT + '/todos/' + id;
    console.log(`ServicioService getTarea() from ${url}`);

    return this.http.get(url);
  }

}
