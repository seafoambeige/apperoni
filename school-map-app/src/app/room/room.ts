/**
 * Created by Mark on 5/20/2017.
 */
import {Door} from './door';

export class Room {
  get nFloor(): number {
    return this._nFloor;
  }

  set nFloor(value: number) {
    this._nFloor = value;
  }
  get doors(): Door[] {
    return this._doors;
  }
  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
  }
  get width(): number {
    return this._width;
  }

  get height(): number {
    return this._height;
  }
  private start = false;
  private _nFloor:number;
  private end = false;
  private _doors: Door[] = [];
  static createDoor(face: number, position: number, roomX: number, roomY: number, width: number, height: number): Door {
    let x = 0;
    let y = 0;
    if (face === 1) {
      y = roomY;
      x = roomX + position - 1;
    } else if (face === 2) {
      x = roomX + width;
      y = roomY + position - 1;
    } else if (face === 3) {
      x = roomX + position - 1;
      y = roomY + height;
    } else if (face === 4) {
      x = roomX;
      y = roomY + position - 1;
    } else {
      console.log('Your face is ugly.');
    }
    return new Door(x, y, face);
  }
  constructor(public name: string, private _x: number, private _y: number, private _width: number, private _height: number, private doorInfo: number[], public roomType: string, public outerRoomName:string) {
   /* if(doorInfo.length===0) {
      console.log('door info is 0 for ' + name);
    }*/
    if(doorInfo.length%2 === 1) {
      console.log('odd num in door ary for ' + name);
    }
    for(let i = 0; i<doorInfo.length-1; i+=2) {
      this._doors.push(Room.createDoor(this.doorInfo[i], this.doorInfo[i+1], _x, _y, _width, _height));
    }
 }

 getTop(zoomFactor: number, offSet: number): string {
    return String((this._y * zoomFactor) + offSet ) + 'px';
 }
  getLeft(zoomFactor: number, offSet: number): string {
    return String((this._x * zoomFactor) + offSet ) + 'px';
  }
  getHeight(zoomFactor: number): string {
    return String(this._height * zoomFactor) + 'px';
  }
  getWidth(zoomFactor: number): string {
    return String(this._width * zoomFactor) + 'px';
  }
  setAsStart(value: boolean): void {
    this.start = value;
  }
  isStart(): boolean { return this.start; }
  isEnd(): boolean { return this.end; }
  setAsEnd(value: boolean): void {
    this.end = value;
  }
  setGrid(grid: any) {
//    console.log('room ' + this.name);
//    console.log('Set walkable false from (' + this._x + ',' + this._y +  ') to (' + + (this._x + this._width - 1) + ',' + (this._y + this._height - 1) + ')');

    if( this.roomType === 'Walkable') {
      return;  // walkable rooms don't block passage
    }
    for(let y = this._y; y < this._height+this._y; y++) {
      for (let x = this._x; x < this._width+this._x; x++) {
        grid.setWalkableAt(x, y, false);

      }
    }
  }

  /*public addToGrid(grid: any): void {
    // loop through each room and that room will add itself to the grid
  }*/



}
