import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/modules/shared.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './_store/reducers';
import { DBComicService } from './shared/services/DBComic.service';
import { AppRouting } from './app.routing';
import { SplashComponent } from './splash/splash.component';
import { HomeComicComponent } from './home-comics/home-comics.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    HomeComicComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    })
  ],
  providers: [DBComicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
