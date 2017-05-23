import {Room} from './room';
/**
 * Created by Mark on 5/20/2017.
 */

export class Map {
  private zoomFactor = 1;
  constructor(public name: string, public rooms: [Room]) {
 }

}
