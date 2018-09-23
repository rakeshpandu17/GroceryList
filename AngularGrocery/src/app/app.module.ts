import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppGroceryComponent } from './app-grocery/app-grocery.component';

@NgModule({
  declarations: [
    AppComponent,
    AppGroceryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent, AppGroceryComponent]
})
export class AppModule { }
