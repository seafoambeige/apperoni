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
}
