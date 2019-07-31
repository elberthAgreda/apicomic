import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComicsComponent } from './favorites_comics.component';

const adminRoutes: Routes = [
  { path: '', component: FavoritesComicsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FavoritesRouting {}
