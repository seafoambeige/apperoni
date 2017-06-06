import {Room} from './room';
import {promise} from 'selenium-webdriver';
import fulfilled = promise.fulfilled;
import {Point} from './point';
/**
 * Created by Mark on 5/20/2017.
 */

declare var PF: any;

export class SchoolMap {
  get startRoom(): Room {
    return this._startRoom;
  }

  get endRoom(): Room {
    return this._endRoom;
  }
  get height(): number {
    return this._height;
  }

  get width(): number {
    return this._width;
  }
private grid: any;
  private _height = 0;
  private _width = 0;
  private _startRoom:Room;
  private _endRoom:Room;

  constructor(public name: string, public rooms: [Room], public nFloor:number ) {
    const self = this;
    self.rooms.sort( function(room1, room2){
      if( room1.name.toUpperCase() === room2.name.toUpperCase() ) {
        return 0;
      }
      return room1.name.toUpperCase() > room2.name.toUpperCase() ? 1 : -1;
    } );

    rooms.forEach(function(room){
      room.nFloor = nFloor;
      if(room.width + room.x > self._width) {
        self._width = room.width + room.x;
      }
      if(room.height + room.y > self._height) {
        self._height = room.height + room.y;
      }
    });


    self.grid = new PF.Grid(self._width, self._height);
    console.log('Grid is ' + self._width + ' wide and ' + self._height + ' high.');
    rooms.forEach(function(room){
      room.setGrid(self.grid);
    });
 }

  public getStairs(): Room[] {
    return this.rooms.filter(function(room){return room.roomType === 'Stair';});
  }


  public getPath(startRoom:Room, endRoom:Room): Point[] {
    const self = this;

    const startDoors = startRoom.doors;
    const endDoors = endRoom.doors;
    if(startDoors.length === 0) {
      console.log('no start doors');
      return [];
    }
    if(endDoors.length === 0) {
      console.log('no end doors');
      return [];
    }

    let bestPath = [];

    const finder = new PF.DijkstraFinder();



    startDoors.forEach(function(startDoor){
      endDoors.forEach(function(endDoor){
        const startaccesspoint = startDoor.getAccessPoint();
        const endaccesspoint = endDoor.getAccessPoint();
        const gridBackup = self.grid.clone();
        const path = finder.findPath(startaccesspoint.x, startaccesspoint.y, endaccesspoint.x, endaccesspoint.y, gridBackup);
        if(path.length === 0) {
          console.log('could not find path for access points');
          console.log(startaccesspoint);
          console.log(endaccesspoint);
          console.log(self.grid);
        } else {
          console.log('Found path for access points');
          console.log(startaccesspoint);
          console.log(endaccesspoint);
          console.log(path);
          console.log(self.grid);
        }
        if(bestPath.length === 0 || (path.length && path.length<bestPath.length)) {
          bestPath = path;
        }
      });
    });

    const points = [];
    bestPath.forEach(function(pathItem){
      points.push(new Point(pathItem[0],pathItem[1]));
    });
    console.log(bestPath);
    if( !points.length ) {
      console.log('Could not find the path between these rooms');
    }
    return points;
  }



 /*

 public addToGrid(grid: any): void{
    // loop through each room and that room will add itself to the grid

 }

 public route( start:string, end:string ): any{
    // find the starting grid square
    // find the end grid square
    // call the functin to do the mapping on the grid getting the path
    return the path

 }

 */

}
