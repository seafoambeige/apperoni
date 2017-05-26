import {Room} from './room';
/**
 * Created by Mark on 5/20/2017.
 */

export class Map {
  private zoomFactor = 1;
  constructor(public name: string, public rooms: [Room]) {
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
