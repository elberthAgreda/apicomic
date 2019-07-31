import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FavoritesComic } from '../models/favoritesComic.model';

@Injectable()
export class DBComicService {

    // Save comics favorites
    private _favoritesComics = new BehaviorSubject<FavoritesComic[]>(null);
    favoritesComics = this._favoritesComics.asObservable();

    public setFavoritesComics(favoritesComics: FavoritesComic[]) {
      this._favoritesComics.next(favoritesComics);
    }

}
