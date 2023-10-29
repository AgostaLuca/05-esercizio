import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { DettaglioDrink } from './dettaglio/dettaglio.component';
import { ErrorPage } from './ErrorPage/errorPage.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
   
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    DettaglioDrink,
    ErrorPage,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
