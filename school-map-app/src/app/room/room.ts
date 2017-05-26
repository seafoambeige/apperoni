/**
 * Created by Mark on 5/20/2017.
 */

export class Room {
  private zoomFactor = 1;
  private offSet = 20;
  private start = false;
  private end = false;
  constructor(public name: string, private x: number, private y: number, private width: number, private height: number) {
 }


 getTop(): string {
    return String((this.y * this.zoomFactor) + this.offSet ) + 'px';
 }
  getLeft(): string {
    return String((this.x * this.zoomFactor) + this.offSet ) + 'px';
  }
  getHeight(): string {
    return String(this.height * this.zoomFactor) + 'px';
  }
  getWidth(): string {
    return String(this.width * this.zoomFactor) + 'px';
  }
  setAsStart(value: boolean): void {
    this.start = value;
  }
  isStart(): boolean { return this.start; }
  isEnd(): boolean { return this.end; }
  setAsEnd(value: boolean): void {
    this.end = value;
  }

  /*public addToGrid(grid: any): void {
    // loop through each room and that room will add itself to the grid
  }*/



}
