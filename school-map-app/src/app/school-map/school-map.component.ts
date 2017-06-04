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
  private zoomFactor = 15;

  private xOffSet = 25;
  private yOffSet = 40;

  private path = [];
  private showDirectionBox = false;
  private error = '';

  private schoolMap =  this.schoolMapService.getMap(SchoolMapService.FIRST_FLOOR);



  constructor( private schoolMapService: SchoolMapService ) {
    //   console.log(this.schoolMap[0]);
    //   console.log(this.schoolMap[0].getHeight());
  }

  private changeStart() {
    const self = this;
    console.log('change start');
    const room = this.schoolMap.setAsStart(self.start);
    if( !room ) {
      self.error = 'Sorry: ' + self.start + ' is not a valid room';
    }else {
      self.error = '';
    }

  }

  private changeEnd() {
    const self = this;
    console.log('change end');
    const room = this.schoolMap.setAsEnd(self.end);
    if( !room ) {
      self.error = 'Sorry: ' + self.end + ' is not a valid room';
    }else {
      self.error = '';
    }

  }
  private showPath() {
    if ( this.error ) {
      return;
    }
    this.path = this.schoolMap.getPath();
    if( this.path && this.path.length ) {
      this.showDirectionBox = false;
    }else {
      this.error = 'Could not find a path from ' + this.schoolMap.startRoom.name + ' to ' +  this.schoolMap.endRoom.name;
    }
  }

  private clearRoute() {
    this.path = null;
    this.schoolMap.setAsStart(null);
    this.schoolMap.setAsEnd(null);
    this.error = '';
  }

  private showDirections() {
    this.showDirectionBox = !this.showDirectionBox;

  }

  private hideDirections() {
    this.showDirectionBox = false;
  }

  private getRoomClass(room) {
    let classes = '';

    if( room.roomType === 'Normal') {
      classes += ' normal-room';
    }
    if( room.roomType === 'Walkable') {
      classes  +=  ' walkable-room';
    }
    if( room.isStart() ) {
      classes += ' start';
    }
    if( room.isEnd() ) {
      classes += ' end';
    }

    return classes;
  }


  ngOnInit() {

  }

}
