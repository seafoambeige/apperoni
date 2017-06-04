import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { SchoolMapComponent } from './school-map/school-map.component';
import {SchoolMapService} from './school-map.service';
import { RoomTypeaheadComponent } from './room-typeahead/room-typeahead.component';

@NgModule({
  declarations: [
    AppComponent,
    SchoolMapComponent,
    RoomTypeaheadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [SchoolMapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
