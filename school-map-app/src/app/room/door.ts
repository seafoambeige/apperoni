import {Point} from './point';
/**
 * Created by sarahhoffman on 5/27/17.
 */
export class Door {
  private yOffset:number;
  private xOffset:number;



  constructor(private x: number, private y: number, private face: number) {
    // compensate for border and position on right and bottom faces
    this.xOffset = (face === 2 ? -2 : 0) ;
    this.yOffset = (face === 3 ? -2 : 0) ;
  }
  public getTop(zoomFactor: number, offSet: number): string {
    return String((this.y * zoomFactor) + offSet + this.yOffset ) + 'px';
  }
  getLeft(zoomFactor: number, offSet: number): string {
    return String((this.x * zoomFactor) + offSet + this.xOffset ) + 'px';
  }
  getHeight(zoomFactor: number): string {
    const tmp = (this.face % 2 ? 0 : 1) * zoomFactor;
    return String(tmp ? tmp  : 0) + 'px';
  }
  getWidth(zoomFactor: number): string {
    const tmp = (this.face % 2 ? 1 : 0) * zoomFactor;
    return String( tmp ? tmp : 0 ) + 'px';
  }
  getAccessPoint(): Point {
    if(this.face === 2 || this.face === 3) {
      return new Point(this.x, this.y);
    }else if(this.face === 1) {
      return new Point (this.x, this.y-1);
    }else if(this.face === 4) {
      return new Point(this.x - 1, this.y);
    } else {
      console.log('bad face');
      return null;
    }
  }
}
