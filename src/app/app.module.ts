<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
=======
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
>>>>>>> 33cc7361ba9146bbbfe21b21a762f9845c108c98

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
