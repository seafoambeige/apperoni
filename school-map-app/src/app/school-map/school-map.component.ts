import { Component, OnInit } from '@angular/core';
import {SchoolMapService} from '../school-map.service';

@Component({
  selector: 'app-school-map',
  templateUrl: './school-map.component.html',
  styleUrls: ['./school-map.component.css']
})
export class SchoolMapComponent implements OnInit {
  // name, x, y, width, height
  private start: string;
  private end: string;

  private schoolMap =  this.schoolMapService.getMap(SchoolMapService.SECOND_FLOOR);



  constructor( private schoolMapService: SchoolMapService ) {
 //   console.log(this.schoolMap[0]);
 //   console.log(this.schoolMap[0].getHeight());
  }

  private changeStart() {
    const self = this;
    console.log('change start');
    this.schoolMap.rooms.forEach(function(Room){
      if (Room.name === self.start) {
        Room.setAsStart(true);
      } else {
        Room.setAsStart(false);
      }
    });

  }

  private changeEnd() {
    const self = this;
    console.log('change end');
    this.schoolMap.rooms.forEach(function(Room){
      if (Room.name === self.end) {
        Room.setAsEnd(true);
      } else {
        Room.setAsEnd(false);
      }
    });
  }


  ngOnInit() {

  }

}
