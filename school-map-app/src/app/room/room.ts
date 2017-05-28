/**
 * Created by Mark on 5/20/2017.
 */
import {Door} from './door';

export class Room {
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
  private end = false;
  private doors: Door[] = [];
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
  constructor(public name: string, private _x: number, private _y: number, private _width: number, private _height: number, private doorInfo: number[]) {
    if(doorInfo.length) {
      this.doors.push(Room.createDoor(this.doorInfo[0], this.doorInfo[1], _x, _y, _width, _height));
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
    for(let y = 0; y < this._height; y++) {
      for (let x = 0; x < this._width; x++) {
        grid.setWalkableAt(this.x, this.y, false);
       // console.log('Set walkable false for x = ' + x + ' y = ' + y + '.');

      }
    }
  }

  /*public addToGrid(grid: any): void {
    // loop through each room and that room will add itself to the grid
  }*/



}
