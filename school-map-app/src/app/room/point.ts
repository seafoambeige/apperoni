/**
 * Created by sarahhoffman on 5/27/17.
 */

export class Point {
  constructor(private x: number, private y:number ) {


  }

  public getTop(zoomFactor: number, offSet: number): string {
    return String((this.y * zoomFactor) + offSet ) + 'px';
  }
  getLeft(zoomFactor: number, offSet: number): string {
    return String((this.x * zoomFactor) + offSet ) + 'px';
  }
  getHeight(zoomFactor: number): string {
    return String(zoomFactor) + 'px';
  }
  getWidth(zoomFactor: number): string {
    return String(zoomFactor) + 'px';
  }


}
