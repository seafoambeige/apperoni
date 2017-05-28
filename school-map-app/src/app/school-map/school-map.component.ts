import { Component, OnInit } from '@angular/core';
import {SchoolMapService} from '../school-map.service';
import {Point} from '../room/point';

@Component({
  selector: 'app-school-map',
  templateUrl: './school-map.component.html',
  styleUrls: ['./school-map.component.css']
})
export class SchoolMapComponent implements OnInit {
  // name, x, y, width, height
  private start: string;
  private end: string;
  private zoomFactor = 10;
  private offSet = 10;
  private path = [];

  private schoolMap =  this.schoolMapService.getMap(SchoolMapService.SECOND_FLOOR);



  constructor( private schoolMapService: SchoolMapService ) {
 //   console.log(this.schoolMap[0]);
 //   console.log(this.schoolMap[0].getHeight());
  }

  private changeStart() {
    const self = this;
    console.log('change start');
    this.schoolMap.setAsStart(self.start);


  }

  private changeEnd() {
    const self = this;
    console.log('change end');
    this.schoolMap.setAsEnd(self.end);
    this.path = this.schoolMap.getPath();

  }


  ngOnInit() {

  }

}
