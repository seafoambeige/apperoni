import {Component, NgModule, OnInit} from '@angular/core';
import {SchoolMapService} from '../school-map.service';
import {Room} from '../room/room';

import {Point} from '../room/point';
import {SchoolMap} from "../room/map";



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

  private xOffSet = 25;
  private yOffSet = 50;

  private path = [];
  private showDirectionBox = false;
  private error = '';

  private schoolMaps = [
    {name:'1st Floor', map:this.schoolMapService.getMap(SchoolMapService.FIRST_FLOOR)},
    {name:'2nd Floor', map:this.schoolMapService.getMap(SchoolMapService.SECOND_FLOOR)}
    ];
  private schoolMap:SchoolMap;
  private floorName: string;
  private nFloor: number;



  private setFloor(nFloor:number) {
    this.schoolMap =  this.schoolMaps[nFloor].map;
    this.floorName = this.schoolMaps[nFloor].name;
    this.nFloor = nFloor;
  }

  constructor( private schoolMapService: SchoolMapService ) {
    //   console.log(this.schoolMap[0]);
    //   console.log(this.schoolMap[0].getHeight());
    this.setFloor(0);

  }

  private changeFloor() {
    if( this.nFloor === 0) {
      this.setFloor(1);
    }else {
      this.setFloor(0);
    }
  }

  private changeStart(room:Room) {
    const self = this;
    console.log('change start');
    const validRoom = this.schoolMap.setAsStart(room.name);
    if( !validRoom ) {
      self.error = 'Sorry: ' + self.start + ' is not a valid room';
    }else {
      self.error = '';
    }

  }

  private changeEnd(room:Room) {
    const self = this;
    console.log('change end');
    const validRoom = this.schoolMap.setAsEnd(room.name);
    if( !validRoom ) {
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

    const roomTypes = room.roomType.split(',');
    roomTypes.forEach(function(roomType){
      if( roomType === 'Normal') {
        classes += ' normal-room';
      }
      if( roomType === 'Walkable') {
        classes  +=  ' walkable-room';
      }
      if( roomType === 'Outside') {
        classes += 'outside-room';
      }
      const regExp = /(HideWall-)([1]*)([2]*)([3]*)([4]*)/;
      const matches = String(roomType).match(regExp);
      if( matches && matches.length ) {
        matches.forEach(function (match) {
          if( match === '1' || match === '2' || match === '3' || match === '4' ) {
            classes += (' hide-wall-' + match);
          }
        });
      }

    });



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
