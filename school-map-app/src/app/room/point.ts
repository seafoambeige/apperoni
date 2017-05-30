/**
 * Created by sarahhoffman on 5/27/17.
 */

export class Point {
  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
  }
  constructor(private _x: number, private _y:number ) {


  }

  public getTop(zoomFactor: number, offSet: number): string {
    return String((this._y * zoomFactor) + offSet ) + 'px';
  }
  getLeft(zoomFactor: number, offSet: number): string {
    return String((this._x * zoomFactor) + offSet ) + 'px';
  }
  getHeight(zoomFactor: number): string {
    return String(zoomFactor) + 'px';
  }
  getWidth(zoomFactor: number): string {
    return String(zoomFactor) + 'px';
  }


}
