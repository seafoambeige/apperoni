import { Injectable } from '@angular/core';
import {Room} from './room/room';



@Injectable()
export class SchoolMapService {
  public static FIRST_FLOOR = 1;
  public static  SECOND_FLOOR = 2;
  constructor() { }
  public getMap( floorNum: number): [Room] {
    if ( floorNum === SchoolMapService.FIRST_FLOOR ) {
      return [
        new Room('Gym', 1, 1, 100, 100)
      ];
    }else {

      return [
        // english hallway, floor 2
        // even side
        new Room('Boys Bathroom', 0, 0, 86, 20),
        new Room('Girls Bathroom', 0, 20, 86, 20),
        new Room('Workroom', 0, 40, 86, 45),
        new Room('412', 0, 85, 86, 35),
        new Room('414', 0, 119, 86, 35),
        new Room('416', 0, 153, 86, 35),
        new Room('418', 0, 187, 86, 35),
        new Room('420', 0, 224, 86, 35),
        new Room('422', 0, 260, 86, 35),
        new Room('Storage', 0, 295, 91, 31),
        // odd side
        new Room('Stairs', 139, 311, 76, 21),
        new Room('Storage', 124, 284, 91, 27),
        new Room('421', 124, 255, 91, 29),
        new Room('419', 124, 211, 91, 44),
        new Room('417', 124, 182, 91, 29),
        new Room('415', 124, 140, 91, 42),
        new Room('413', 124, 103, 91, 37),
        new Room('411', 124, 66, 91, 37),
        new Room('Workroom', 124, 20, 91, 46),
        new Room('Stairs', 124, 0, 91, 20)
      ];
    }
}




}
