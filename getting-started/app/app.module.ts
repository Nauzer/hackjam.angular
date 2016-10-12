
// Entry point of our application

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { AppModule } from './app.module';
import { CategoryFilterPipe } from './category.filter';
import { SearchFilterPipe } from './search.filter';

@NgModule({
  imports:      [ BrowserModule ], // Inject built-in modules
  declarations: [ AppComponent, CategoryFilterPipe, SearchFilterPipe ], // Inject your own modules
  bootstrap:    [ AppComponent ] // Module you need to bootstrap
})
export class AppModule { }
