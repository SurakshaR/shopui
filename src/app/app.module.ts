import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { Routes, RouterModule } from "@angular/router";
import { RatingComponent } from './rating/rating.component';
export const appRoutes: Routes = [
  { path: 'thank', pathMatch: 'full', component: ThankyouComponent },
  { path: 'home', pathMatch: 'full', component: RatingComponent }]
@NgModule({
  declarations: [
    AppComponent,
    ThankyouComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
