import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

/** @description Class centralizada para el manejo de peticiones REST */
export class HttpProxy {

    private url: string;

    constructor( private http: HttpClient, private endpoint: string ) {
        this.url = endpoint;
    }

    /** @description Metodo que permite Obtener datos por GET con parametros */
    public get<T>( service: string, queryParam: string ): Observable<T> {
        const headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http.get<T>(this.url + queryParam + service, { headers });
    }

}
