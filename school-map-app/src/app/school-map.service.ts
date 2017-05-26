import { Injectable } from '@angular/core';
import {Room} from './room/room';
import {Map} from './room/map';

declare var PF: any;



@Injectable()
export class SchoolMapService {
  public static FIRST_FLOOR = 1;
  public static  SECOND_FLOOR = 2;
  constructor() { }
  public getMap( floorNum: number): Map {
    if ( floorNum === SchoolMapService.FIRST_FLOOR ) {
      return new Map('1st Floor', [

        new Room('Mech room', 125, 221, 132, 93),
        new Room('kitchen', 155, 363, 106, 100),
        new Room('servery', 158, 464, 82, 85),
        new Room('faculty lounge', 153, 511, 86, 61),
        new Room('main gym', 292, 412, 320, 179),
        new Room('boys locker', 292, 344, 160, 67),
        new Room('girls locker', 448, 346, 163, 64),
        new Room('trainer\'s room', 290, 249, 54, 52),
        new Room('team room 1', 343, 249, 161, 80),
        new Room('team room 2', 516, 251, 91, 81),
        new Room('receiving', 180, 312, 81, 52),
        new Room('café entrance', 137, 608, 105, 145),
        new Room('band room', 136, 754, 124, 92),
        new Room('orchestra', 132, 920, 125, 91),
        new Room('choir', 377, 952, 125, 91),
        new Room('school store', 675, 643, 49, 51),
        new Room('606', 633, 250, 125, 90),
        new Room('602', 758, 257, 95, 83),
        new Room('mech room', 763, 183, 57, 45),
        new Room('mech room', 819, 183, 63, 45),
        new Room('210', 882, 183, 84, 45),
        new Room('211', 965, 183, 83, 45),
        new Room('212', 1049, 183, 89, 45),
        new Room('213', 1136, 183, 79, 45),
        new Room('214', 1213, 183, 83, 45),
        new Room('215', 1299, 183, 82, 45),
        new Room('251', 892, 243, 73, 45),
        new Room('252', 959, 243, 73, 45),
        new Room('255', 1030, 244, 73, 36),
        new Room('209', 1129, 244, 73, 36),
        new Room('208', 1214, 244, 87, 39),
        new Room('207', 1300, 245, 56, 36),
        new Room('206', 1356, 244, 86, 47),
        new Room('205', 1356, 290, 82, 27),
        new Room('204', 1355, 315, 86, 32),
        new Room('218', 1429, 188, 126, 44),
        new Room('221', 1468, 247, 85, 114),
        new Room('225', 1383, 358, 175, 49),
        new Room('240/241', 1159, 372, 143, 69),
        new Room('200', 1159, 372, 143, 47),
        new Room('201', 1200, 314, 45, 48),
        new Room('202', 1244, 316, 46, 46),
        new Room('203', 1291, 314, 45, 48),
        new Room('226', 1303, 374, 48, 23),
        new Room('228', 1304, 396, 46, 24),
        new Room('230', 1300, 420, 50, 21),
        new Room('234', 1269, 441, 77, 50),
        new Room('232', 1215, 457, 55, 33),
        new Room('235', 1216, 438, 52, 20),
        new Room('boys br', 1258, 491, 91, 17),
        new Room('girls br', 1260, 511, 88, 17),
        new Room('fake 322', 1259, 527, 89, 43),
        new Room('312', 1257, 570, 90, 33),
        new Room('314', 1260, 622, 91, 37),
        new Room('316', 1258, 660, 91, 37),
        new Room('318', 1258, 750, 94, 34),
        new Room('320', 1258, 750, 94, 34),
        new Room('322', 1258, 785, 92, 34),
        new Room('stairs', 1378, 491, 99, 21),
        new Room('305', 1380, 509, 98, 47),
        new Room('311', 1382, 554, 94, 36),
        new Room('313', 1381, 588, 95, 36),
        new Room('315', 1382, 624, 94, 36),
        new Room('317', 1382, 660, 94, 37),
        new Room('319', 1383, 693, 92, 36),
        new Room('321', 1383, 728, 94, 37),
        new Room('126', 693, 735, 121, 35),
        new Room('124', 693, 784, 120, 36),
        new Room('122', 693, 818, 122, 35),
        new Room('120', 705, 866, 110, 57)
      ]);
    }else {


      const matrix: any = [
        [0, 0, 0, 1, 0],
        [1, 0, 0, 0, 1],
        [0, 0, 1, 0, 0],
      ];
      const grid = new PF.Grid(matrix);
      const finder = new PF.DijkstraFinder();
      const path = finder.findPath(1, 2, 4, 2, grid);
      console.log(path);

      return new Map ('2nd Floor', [
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
      ]);
    }
}




}
