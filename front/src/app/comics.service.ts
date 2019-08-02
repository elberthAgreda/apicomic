import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpProxy } from './shared/services/http.proxy.class';
import { environment } from 'src/environments/environment';
import { AppServices } from './_config/app.variables';


@Injectable()

export class ComicService {

  private proxy: HttpProxy;

  constructor( private http: HttpClient ) {
    const serviceUri = environment.apiEndpoint + AppServices.api;
    this.proxy = new HttpProxy(http, serviceUri);
  }

  public getComics<T>( idComic: number ): Observable<T> {
    return this.proxy.get<T>(AppServices.comics.getComics, idComic.toString());
  }


}
