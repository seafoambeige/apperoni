import { Injectable } from '@angular/core';
import {Room} from './room/room';
import {SchoolMap} from './room/map';
import {Point} from './room/point';





@Injectable()
export class SchoolMapService {
  public static FIRST_FLOOR = 0;
  public static  SECOND_FLOOR = 1;
  private schoolMaps = [];
  private rooms:Room[] = [];
  constructor() {
    this.schoolMaps = [
        new SchoolMap('1st Floor', [

          new Room('mech3', 0, 4, 13, 9,[2,3],'Normal',''),
          new Room('receiving', 5, 13, 8, 5,[2,4],'Normal',''),
          new Room('kitchen', 2, 18, 11, 10,[3,1],'Normal',''),
          new Room('servery', 2, 28, 8, 9,[2,9],'Normal',''),
          new Room('faculty lounge', 2, 37, 8, 6,[2,6],'Normal',''),

          new Room('main gym', 16, 23, 32, 18,[ 4,1,2,2,4,8,4,10,4,18,2,18,2,8,2,10,1,30,1,2],'Normal',''),
          new Room('boys locker', 16, 17, 16, 6,[3,2],'Normal','main gym'),
          new Room('girls locker', 32, 17, 16, 6,[3,14],'Normal','main gym'),

          new Room('trainer\'s room', 16, 7, 5, 5,[4,4],'Normal',''),
          new Room('team room 1', 21, 7, 16, 8,[],'Normal',''),
          new Room('team room 2', 39, 7, 9, 8,[],'Normal',''),
          new Room('606', 50, 7, 13, 9,[4,9,2,2],'Normal',''),
          new Room('602', 63, 8, 10, 8,[3,1,2,1],'Normal',''),

          new Room('cafeteria', 16, 43, 32, 11,[],'Walkable',''),

          new Room('school store', 55, 46, 5, 5,[4,2],'Normal',''),

          new Room('mech1', 63, 0, 6, 5,[4,3],'Normal',''),
          new Room('mech2', 69, 0, 6, 5,[3,2],'Normal',''),
          new Room('210', 75, 0, 8, 5,[3,7],'Normal',''),
          new Room('211', 83, 0, 8, 5,[3,2],'Normal',''),
          new Room('212', 91, 0, 9, 5,[3,7],'Normal',''),
          new Room('213', 100, 0, 8, 5,[3,2],'Normal',''),
          new Room('214', 108, 0, 8, 5,[3,7],'Normal',''),
          new Room('215', 116, 0, 8, 5,[3,2],'Normal',''),
          new Room('218', 130, 0, 13, 5,[3,2],'Normal',''),

          new Room('131', 71, 58, 9, 6,[],'Normal',''),
          new Room('133', 80, 58, 8, 6,[],'Normal',''),
          new Room('Media Center', 71, 64, 17, 15,[],'Normal',''),
          new Room('Attendance', 84, 81, 7, 4,[],'Normal',''),
          new Room('Main Office', 69, 80, 7, 6,[],'Normal',''),
          new Room('Guidance', 90, 57, 12, 12,[],'Normal',''),
          new Room('Special Services', 90, 69, 10, 10,[],'Normal',''),
          new Room('Outside', 102, 55, 11, 2,[],'Outside,HideWall-23',''),

          new Room('Lecture Hall 501', 33, 54, 11, 4,[],'Normal','Auditorium'),
          new Room('Lecture Hall 502', 16, 54, 11, 4,[],'Normal','Auditorium'),
          new Room('Auditorium', 16, 58, 28, 13,[],'Normal',''),

          new Room('Auxillary Gym', 66, 43, 26, 10,[1,1,1,26,3,1,3,26],'Normal',''),

          new Room('Courtyard3', 47, 55, 10, 12,[],'Normal',''),
          new Room('126', 57, 55, 12, 4,[2,4],'Normal',''),
          new Room('124', 57, 59, 12, 4,[2,3],'Normal',''),
          new Room('122', 57, 63, 12, 4,[2,4],'Normal',''),

          new Room('Band Lockers', 1, 67, 6, 4,[1,4],'Normal',''),
          new Room('Band Office', 9, 67, 5, 3,[4,3],'Normal',''),
          new Room('Band Room', 1, 58, 12, 9,[1,1,1,9],'Normal',''),
          new Room('Choral Room', 25, 77, 15, 6,[1,1,1,14],'Normal',''),

          new Room('Orchestra', 0, 74, 12, 9,[4,6,2,2],'Normal',''),
          new Room('Piano Room', 1, 53, 10, 5,[2,1,3,8],'Normal',''),
          new Room('Sm. Ensemble Room', 16, 80, 6, 3,[1,1],'Normal',''),
          new Room('Stage', 16, 71, 28, 5,[4,5,3,2,2,1],'Normal',''),

          new Room('Courtyard1', 51, 18, 7, 23,[],'Normal',''),
          new Room('District MDF', 58, 18, 8, 3,[1,2],'Normal',''),
          new Room('MDF1', 66, 18, 7, 3,[1,2],'Normal',''),
          new Room('272', 58, 21, 15, 5,[2,4],'Normal',''),
          new Room('276', 58, 26, 15, 5,[2,3],'Normal',''),
          new Room('278', 58, 31, 15, 5,[2,2],'Normal',''),
          new Room('282', 58, 36, 15, 5,[2,2],'Normal',''),

          new Room('Courtyard2', 47, 68, 10, 10,[],'Normal',''),
          new Room('120', 57, 68, 12, 5,[],'Normal',''),
          new Room('Nurse', 57, 73, 12, 5,[],'Normal',''),
          new Room('Admin Office', 49, 78, 29, 4,[],'Normal','Main Office'),

          new Room('242', 84, 19, 17, 9,[1,14,2,8],'Normal',''),


          new Room('263', 84, 19, 8, 5,[1,1],'Normal',''),
          new Room('265', 75, 19, 9, 3,[1,9],'Normal',''),
          new Room('266', 75, 22, 9, 4,[4,1],'Normal',''),
          new Room('267', 75, 26, 9, 5,[4,1],'Normal',''),
          new Room('275', 75, 31, 12, 4,[4,1],'Normal',''),
          new Room('281', 75, 37, 12, 4,[4,4],'Normal',''),
          new Room('283', 87, 37, 12, 4,[3,1],'Normal',''),
          new Room('248', 87, 33, 12, 4,[2,1],'Normal',''),
          new Room('mech4', 84, 28, 9, 3,[],'Normal',''),



          new Room('251', 75, 6, 7, 5,[1,7],'Normal',''),
          new Room('252', 82, 6, 8, 5,[1,8],'Normal',''),
          new Room('255', 90, 6, 7, 4,[1,7],'Normal',''),
          new Room('253', 90, 10, 7, 4,[2,4],'Normal',''),
          new Room('260', 90, 14, 7, 4,[3,1],'Normal',''),
          new Room('262', 83, 14, 7, 4,[3,7],'Normal',''),
          new Room('264', 75, 14, 8, 4,[3,8],'Normal',''),
          new Room('288', 75, 11, 15, 3,[4,2],'Normal',''),
          new Room('MDF2', 97, 15, 3, 3,[1,1],'Normal',''),

          new Room('204', 121, 14, 8, 3,[2,1,2,2],'Normal',''),
          new Room('205', 121, 11, 8, 3,[2,1],'Normal',''),
          new Room('Courtyard6', 101, 10, 20, 3,[],'Normal',''),
          new Room('206', 121, 6, 8, 5,[2,1,1,3],'Normal',''),
          new Room('207', 116, 6, 5, 4,[1,4],'Normal',''),
          new Room('208', 108, 6, 8, 4,[1,2],'Normal',''),
          new Room('209', 100, 6, 8, 4,[1,5],'Normal',''),
          new Room('200', 101, 13, 5, 4,[3,3],'Normal',''),
          new Room('201', 106, 13, 5, 4,[3,1],'Normal',''),
          new Room('202', 111, 13, 5, 4,[3,3],'Normal',''),
          new Room('203', 116, 13, 5, 4,[3,1],'Normal',''),

          new Room('221', 134, 7, 9, 11,[4,6],'Normal',''),
          new Room('226', 117, 19, 5, 3,[2,3],'Normal',''),
          new Room('228', 117, 22, 5, 3,[2,3],'Normal',''),
          new Room('230', 117, 25, 5, 3,[2,1],'Normal',''),
          new Room('232', 109, 30, 6, 3,[],'Normal',''),
          new Room('234', 114, 28, 8, 5,[],'Normal',''),
          new Room('235', 109, 28, 5, 2,[],'Normal',''),
          new Room('240/241', 103, 19, 14, 9,[1,2],'Normal',''),


          new Room('225', 125, 18, 18, 5,[4,3],'Normal',''),
          new Room('229', 125, 23, 18, 5,[4,2],'Normal',''),
          new Room('231', 125, 28, 18, 5,[4,4],'Normal',''),
          new Room('Stairs1', 125, 33, 10, 2,[4,1,4,2],'Stair',''),
          new Room('305', 125, 35, 10, 4,[4,3],'Normal',''),
          new Room('311', 125, 39, 9, 4,[4,4],'Normal',''),
          new Room('313', 125, 43, 9, 4,[4,1],'Normal',''),
          new Room('315', 125, 47, 9, 4,[4,4],'Normal',''),
          new Room('317', 125, 51, 9, 4,[4,1],'Normal',''),
          new Room('319', 125, 55, 9, 4,[4,4],'Normal',''),
          new Room('321', 125, 59, 9, 4,[4,1],'Normal',''),
          new Room('Stairs2', 125, 64, 9, 3,[4,2,4,1],'Stair',''),

          new Room('Courtyard5', 103, 33, 10, 10,[],'Normal',''),
          new Room('boys br1', 113, 33, 9, 2,[2,1],'Normal',''),
          new Room('girls br1', 113, 35, 9, 2,[2,2],'Normal',''),
          new Room('309', 113, 37, 9, 3,[2,2],'Normal',''),
          new Room('312', 113, 40, 9, 3,[2,3],'Normal',''),

          new Room('Courtyard4', 103, 45, 10, 8,[],'Normal',''),
          new Room('314', 113, 45, 9, 4,[2,4],'Normal',''),
          new Room('316', 113, 49, 9, 4,[2,1],'Normal',''),
          new Room('318', 113, 55, 9, 4,[2,1],'Normal',''),
          new Room('320', 113, 59, 9, 4,[2,4],'Normal',''),
          new Room('322', 113, 63, 9, 4,[2,1],'Normal',''),



        ], 0),
      new SchoolMap ('2nd Floor', [


        new Room('Boys BR', 0, 0, 8, 2,[2,1],'Normal',''),
        new Room('Girls BR', 0, 2, 8, 2,[2,1],'Normal',''),
        new Room('workroom', 0, 4, 8, 5,[2,3],'Normal',''),
        new Room('412', 0, 9, 8, 4,[2,4],'Normal',''),
        new Room('414', 0, 13, 8, 4,[2,1],'Normal',''),
        new Room('416', 0, 17, 8, 4,[2,4],'Normal',''),
        new Room('418', 0, 21, 8, 4,[2,1],'Normal',''),
        new Room('420', 0, 25, 8, 4,[2,4],'Normal',''),
        new Room('422', 0, 29, 8, 4,[2,1],'Normal',''),
        new Room('Storage1', 0, 33, 8, 3,[],'Normal',''),

        new Room('Stairs1', 12, 0, 9, 2,[4,1,4,2],'Stair',''),
        new Room('Workroom', 12, 2, 9, 5,[4,3],'Normal',''),
        new Room('411', 12, 7, 9, 4,[4,4],'Normal',''),
        new Room('413', 12, 11, 9, 4,[4,1],'Normal',''),
        new Room('415', 12, 15, 9, 4,[4,4],'Normal',''),
        new Room('417', 12, 19, 9, 3,[4,1],'Normal',''),
        new Room('419', 12, 22, 9, 4,[4,4],'Normal',''),
        new Room('421', 12, 26, 9, 3,[4,1],'Normal',''),
        new Room('Storage', 12, 29, 9, 3,[4,4],'Normal',''),
        new Room('Stairs2', 12, 32, 8, 2,[4,1,4,2],'Stair',''),




      ], 1)
    ];
  }

  public getMap( floorNum: number): SchoolMap {
      return this.schoolMaps[floorNum];
  }

  public getRooms( ):Room[] {
    if( !this.rooms.length ) {
      this.rooms = this.schoolMaps[0].rooms.concat(this.schoolMaps[1].rooms);
      this.rooms.sort(function (room1, room2) {
        if (room1.name.toUpperCase() === room2.name.toUpperCase()) {
          return 0;
        }
        return room1.name.toUpperCase() > room2.name.toUpperCase() ? 1 : -1;
      });
    }
    return this.rooms;
  }


  public getPath(startRoom:Room, endRoom:Room): [Point[], Point[]] {
    const self = this;
    const result:[Point[],Point[]] = [[],[]];
    if( startRoom.nFloor === endRoom.nFloor ) {
        const map = self.getMap(startRoom.nFloor);
        result[startRoom.nFloor] = map.getPath(startRoom, endRoom);
        return result ;
    }else {
      const startMap = self.getMap(startRoom.nFloor);
      const startStairs = startMap.getStairs();
      const endMap = self.getMap(endRoom.nFloor);
      const endStairs = endMap.getStairs();
      let pathLength = 5000;
      startStairs.forEach(function(startStair){
        const matchEndStair = endStairs.filter(function(endStair){return startStair.name === endStair.name;});
        if ( matchEndStair.length ) {
          // got a matching start and end start so create the paths and add to the combinedPath array
          const endStair = matchEndStair[0];
          const startPath = startMap.getPath(startRoom,startStair);
          const endPath = endMap.getPath(endStair, endRoom );
          if( startPath.length && endPath.length && pathLength > startPath.length + endPath.length ) {
             result[startRoom.nFloor] = startPath;
             result[endRoom.nFloor] = endPath;
             pathLength = startPath.length + endPath.length;
          }
        }
      });
      return result;


    }


  }


}
