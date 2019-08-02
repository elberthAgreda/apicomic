import { Component, OnInit } from '@angular/core';
import { range, of, Subscription } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.html',
  styleUrls: ['./splash.scss'],
})

export class SplashComponent implements OnInit {

  fondoBackground: string;
  arrayImagesBackground: string[];
  intervalImage: Subscription;

  constructor( private router: Router) { }

  ngOnInit() {
    this.arrayImagesBackground = [];
    const domain = 'assets/';
    this.arrayImagesBackground[0] = domain + 'fondo1.jpg';
    this.arrayImagesBackground[1] = domain + 'fondo2.jpg';
    this.arrayImagesBackground[2] = domain + 'fondo3.jpeg';
    this.arrayImagesBackground[3] = domain + 'fondo4.jpg';
    this.changeImageBackground();
  }

  changeImageBackground(): void {
    this.intervalImage = range(1, 3).pipe(
      concatMap(i => of(i).pipe(delay(100 + (Math.random() * 100))))
    ).subscribe(val => {
      this.fondoBackground = this.arrayImagesBackground[val];
      if ( val === 3 ) {
        this.changeImageBackground();
      }
    });
  }

  removeSplash(): void {
    this.intervalImage.unsubscribe();
    this.router.navigate(['home']);
  }

}
