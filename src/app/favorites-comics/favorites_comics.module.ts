import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesRouting } from './favorites_comics.routing';
import { FavoritesComicsComponent } from './favorites_comics.component';
import { SharedModule } from '../shared/modules/shared.module';

@NgModule({
  declarations: [
    FavoritesComicsComponent
  ],
  imports: [
    FavoritesRouting,
    CommonModule,
    SharedModule
  ],
  providers: []
})
export class FavoritesComicsModule { }
