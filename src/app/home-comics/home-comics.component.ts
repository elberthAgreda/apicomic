import { Component, OnInit, OnDestroy } from '@angular/core';
import { ComicService } from '../comics.service';
import { Comic } from '../shared/models/comic.model';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { DBComicService } from '../shared/services/DBComic.service';
import { FavoritesComic } from '../shared/models/favoritesComic.model';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-home-comic',
  templateUrl: './home-comics.html',
  styleUrls: ['./home-comics.scss'],
  providers: [ComicService]
})

export class HomeComicComponent implements OnInit,  OnDestroy {

  comic: Comic = new Comic();
  intervalImage: Subscription;
  favoritesComics: FavoritesComic[] = [];
  currentPosition: number;

  constructor( private comicService: ComicService,
               protected store: Store<Comic>,
               private router: Router,
               private snackBar: MatSnackBar,
               private DBComic: DBComicService ) { }

  ngOnInit() {
    this.randomComic();
  }

  randomComic(): void {
    this.currentPosition = Math.floor((Math.random() * 100) + 1);
    this.getIdComic(this.currentPosition);
  }

  getIdComic( id: number ): void {
    this.comicService.getComics(id).subscribe(
      comics => { this.comic = comics as Comic; }
    );
  }

  favoriteComic( comic: Comic ): void {
    const favoriteComic: FavoritesComic = new FavoritesComic();
    favoriteComic.comicName = comic.title;
    favoriteComic.comicsUrl = comic.img;
    favoriteComic.comicDescription = comic.transcript;
    favoriteComic.comicAlt = comic.alt;
    favoriteComic.date = new Date();
    favoriteComic.points = 3;
    this.favoritesComics.push(favoriteComic);
    this.DBComic.setFavoritesComics(this.favoritesComics);
    this.randomComic();
    this.snackBar.open('Agregado a favoritos',
                         'Aceptar', {
                         duration: 3000 });
  }

  public showFavorites(): void {
    const BDComicsFavorite = localStorage.getItem('favoriteComics');
    if ( this.favoritesComics.length === 0 &&  BDComicsFavorite == null ) {
      this.snackBar.open('Aún no tienes comics favoritos',
                         'Aceptar', {
                         duration: 3000 });
      return;
    }
    this.router.navigate(['favorites']);
  }

  ngOnDestroy() {
    if ( this.favoritesComics.length !== 0 ) {
      const tmpFavoriteComics = JSON.stringify(this.favoritesComics);
      localStorage.setItem('favoriteComics', tmpFavoriteComics);
    }
  }

  changeComic( control: string ): void {
    if ( control === 'N' ) {
      this.currentPosition++;
      this.getIdComic(this.currentPosition);
    } else {
      this.currentPosition--;
      this.getIdComic(this.currentPosition);
    }
  }


}
