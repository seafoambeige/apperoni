import {Point} from './point';
/**
 * Created by sarahhoffman on 5/27/17.
 */
export class Door {

  constructor(private x: number, private y: number, private face: number) {

  }
  public getTop(zoomFactor: number, offSet: number): string {
    return String((this.y * zoomFactor) + offSet ) + 'px';
  }
  getLeft(zoomFactor: number, offSet: number): string {
    return String((this.x * zoomFactor) + offSet ) + 'px';
  }
  getHeight(zoomFactor: number): string {
    return String((this.face % 2 ? 0 : 1) * zoomFactor) + 'px';
  }
  getWidth(zoomFactor: number): string {
    return String((this.face % 2 ? 1 : 0) * zoomFactor) + 'px';
  }
  getAccessPoint(): Point{
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
