import {Room} from './room';
import {promise} from 'selenium-webdriver';
import fulfilled = promise.fulfilled;
import {Point} from './point';
/**
 * Created by Mark on 5/20/2017.
 */

declare var PF: any;

export class Map {
  get height(): number {
    return this._height;
  }

  get width(): number {
    return this._width;
  }
private grid: any;
  private _height = 0;
  private _width = 0;
  private startRoom:Room;
  private endRoom:Room;
  constructor(public name: string, public rooms: [Room]) {
    const self = this;
    rooms.forEach(function(room){
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
public setAsStart(roomName: string) {
    const self = this;
  self.startRoom = null;
  self.rooms.forEach(function (Room) {
    if (Room.name === roomName) {
      Room.setAsStart(true);
      self.startRoom = Room;
    } else {
      Room.setAsStart(false);
    }
  });
}

  public setAsEnd(roomName: string) {
    const self = this;
    self.endRoom = null;
    self.rooms.forEach(function (Room) {
      if (Room.name === roomName) {
        Room.setAsEnd(true);
        self.endRoom = Room;
      } else {
        Room.setAsEnd(false);
      }
    });
  }

  public getPath(): Point[] {
    if( this.startRoom == null || this.endRoom == null) {
      console.log('tried to get path without start or end.');
      return null;
    }
    const finder = new PF.DijkstraFinder();
    const path = finder.findPath(9, 0, 11, 32, this.grid);
    const points = [];
    path.forEach(function(pathItem){
      points.push(new Point(pathItem[0],pathItem[1]));
    });
    console.log(path);
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
