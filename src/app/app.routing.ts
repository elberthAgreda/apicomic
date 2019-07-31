import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { HomeComicComponent } from './home-comics/home-comics.component';

export const appRoutes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: SplashComponent},
  {path: 'home', component: HomeComicComponent},
  {
    path: 'favorites',
    loadChildren: () => import('./favorites-comics/favorites_comics.module').then(m => m.FavoritesComicsModule)
  },
  {path: '**', redirectTo: 'inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouting { }
