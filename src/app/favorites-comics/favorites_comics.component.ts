import { Component, OnInit } from '@angular/core';
import { DBComicService } from '../shared/services/DBComic.service';
import { FavoritesComic } from '../shared/models/favoritesComic.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favorites-comics',
  templateUrl: './favorites_comics.html',
  styleUrls: ['./favorites_comics.scss'],
})

export class FavoritesComicsComponent implements OnInit {

  favoritesComics: FavoritesComic[] = [];
  subscribeFavoriteComics: Subscription;
  constructor( private DBComic: DBComicService ) { }

  ngOnInit() {
    this.subscribeFavoriteComics = this.DBComic.favoritesComics.subscribe(
      favoritesComics => {
        this.favoritesComics = favoritesComics;
        if ( this.favoritesComics == null ) {
          this.favoritesComics = this.getFavoriteComicsLocal();
        }
      }
    );
  }

  getFavoriteComicsLocal(): FavoritesComic[] {
    const DBFavoriteComic = JSON.parse(localStorage.getItem('favoriteComics')) as FavoritesComic[];
    return DBFavoriteComic;
  }

}
