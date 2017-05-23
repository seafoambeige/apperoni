import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SchoolMapComponent } from './school-map/school-map.component';
import {SchoolMapService} from './school-map.service';

@NgModule({
  declarations: [
    AppComponent,
    SchoolMapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SchoolMapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
