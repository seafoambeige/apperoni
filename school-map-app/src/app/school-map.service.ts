import { Injectable } from '@angular/core';
import {Room} from './room/room';
import {Map} from './room/map';





@Injectable()
export class SchoolMapService {
  public static FIRST_FLOOR = 1;
  public static  SECOND_FLOOR = 2;
  constructor() { }
  public getMap( floorNum: number): Map {
    if ( floorNum === SchoolMapService.FIRST_FLOOR ) {
      return new Map('1st Floor', [

        new Room('mech3', 13, 22, 13, 9,[2,3],'Normal'),
        new Room('receiving', 18, 31, 8, 5,[2,4],'Normal'),
        new Room('kitchen', 15, 36, 11, 10,[3,1],'Normal'),
        new Room('servery', 15, 46, 8, 9,[2,9],'Normal'),
        new Room('faculty lounge', 15, 55, 8, 6,[2,6],'Normal'),

        new Room('main gym', 29, 41, 32, 18,[ 4,1,2,1,4,8,4,10,4,18,2,18,2,8,2,10],'Normal'),
        new Room('boys locker', 29, 35, 16, 6,[3,2],'Normal'),
        new Room('girls locker', 45, 35, 16, 6,[3,14],'Normal'),

        new Room('trainer\'s room', 29, 25, 5, 5,[4,4],'Normal'),
        new Room('team room 1', 34, 25, 16, 8,[],'Normal'),
        new Room('team room 2', 52, 25, 9, 8,[],'Normal'),
        new Room('606', 63, 25, 13, 9,[4,9,2,2],'Normal'),
        new Room('602', 76, 26, 10, 8,[3,1,2,1],'Normal'),

        new Room('cafeteria', 29, 61, 32, 11,[],'Walkable'),

        //new Room('band room', 14, 75, 12, 9,[],'Normal'),
        //new Room('orchestra', 13, 92, 13, 9,[],'Normal'),
        //new Room('choir', 38, 95, 13, 9,[],'Normal'),
        new Room('school store', 68, 64, 5, 5,[4,2],'Normal'),

        new Room('mech1', 76, 18, 6, 5,[4,3],'Normal'),
        new Room('mech2', 82, 18, 6, 5,[3,2],'Normal'),
        new Room('210', 88, 18, 8, 5,[3,7],'Normal'),
        new Room('211', 96, 18, 8, 5,[3,2],'Normal'),
        new Room('212', 104, 18, 9, 5,[3,7],'Normal'),
        new Room('213', 113, 18, 8, 5,[3,2],'Normal'),
        new Room('214', 121, 18, 8, 5,[],'Normal'),
        new Room('215', 129, 18, 8, 5,[],'Normal'),
        new Room('218', 143, 18, 13, 5,[],'Normal'),

        new Room('131', 84, 76, 9, 6,[],'Normal'),
        new Room('133', 93, 76, 8, 6,[],'Normal'),
        new Room('Media Center', 84, 82, 17, 15,[],'Normal'),
        new Room('Attendance', 97, 99, 7, 4,[],'Normal'),
        new Room('Main Office', 82, 98, 7, 6,[],'Normal'),

        new Room('Lecture Hall 501', 46, 72, 11, 4,[],'Normal'),
        new Room('Lecture Hall 502', 29, 72, 11, 4,[],'Normal'),
        new Room('Auditorium', 29, 76, 28, 13,[],'Normal'),

        new Room('Auxillary Gym', 79, 61, 26, 10,[],'Normal'),

        new Room('Courtyard3', 60, 73, 10, 12,[],'Normal'),
        new Room('126', 70, 73, 12, 4,[],'Normal'),
        new Room('124', 70, 77, 12, 4,[],'Normal'),
        new Room('122', 70, 81, 12, 4,[],'Normal'),

        new Room('Band Lockers', 14, 85, 6, 4,[],'Normal'),
        new Room('Band Office', 22, 85, 5, 3,[],'Normal'),
        new Room('Band Room', 14, 76, 12, 9,[],'Normal'),
        new Room('Choral Room', 38, 95, 15, 6,[],'Normal'),
        new Room('Courtyard2', 60, 86, 10, 10,[],'Normal'),
        new Room('Guidance', 103, 75, 12, 5,[],'Normal'),
        new Room('Orchestra', 13, 92, 12, 9,[],'Normal'),
        new Room('Piano Room', 14, 71, 10, 5,[],'Normal'),
        new Room('Sm. Ensemble Room', 29, 98, 6, 3,[],'Normal'),
        new Room('Special Services', 103, 87, 10, 5,[],'Normal'),
        new Room('Stage', 29, 90, 28, 5,[],'Normal'),

        new Room('Courtyard1', 64, 36, 7, 23,[],'Normal'),
        new Room('District MDF', 71, 36, 8, 3,[],'Normal'),
        new Room('MDF1', 79, 36, 7, 3,[],'Normal'),
        new Room('272', 71, 39, 15, 5,[],'Normal'),
        new Room('276', 71, 44, 15, 5,[],'Normal'),
        new Room('278', 71, 49, 15, 5,[],'Normal'),
        new Room('282', 71, 54, 15, 5,[],'Normal'),




        new Room('242', 97, 37, 17, 9,[],'Normal'),

        new Room('248', 100, 51, 12, 4,[],'Normal'),

        new Room('263', 97, 37, 8, 5,[],'Normal'),
        new Room('265', 88, 37, 9, 3,[],'Normal'),
        new Room('266', 88, 40, 9, 4,[],'Normal'),
        new Room('267', 88, 44, 9, 5,[],'Normal'),
        new Room('275', 88, 49, 12, 4,[],'Normal'),
        new Room('281', 88, 55, 12, 4,[],'Normal'),
        new Room('283', 100, 55, 12, 4,[],'Normal'),
        new Room('248', 100, 51, 12, 4,[],'Normal'),
        new Room('mech4', 97, 46, 9, 3,[],'Normal'),

        new Room('120', 71, 87, 11, 6,[],'Normal'),

        new Room('251', 88, 24, 7, 5,[],'Normal'),
        new Room('252', 95, 24, 8, 5,[],'Normal'),
        new Room('255', 103, 24, 7, 4,[],'Normal'),
        new Room('253', 103, 28, 7, 4,[],'Normal'),
        new Room('260', 103, 32, 7, 4,[],'Normal'),
        new Room('262', 96, 32, 7, 4,[],'Normal'),
        new Room('264', 88, 32, 8, 4,[],'Normal'),
        new Room('288', 88, 29, 15, 3,[],'Normal'),
        new Room('MDF2', 110, 33, 3, 3,[],'Normal'),

        new Room('204', 135, 32, 8, 3,[],'Normal'),
        new Room('205', 135, 29, 8, 3,[],'Normal'),
        new Room('Courtyard6', 114, 28, 21, 3,[],'Normal'),
        new Room('206', 135, 24, 8, 5,[],'Normal'),
        new Room('207', 129, 24, 6, 4,[],'Normal'),
        new Room('208', 121, 24, 8, 4,[],'Normal'),
        new Room('209', 113, 24, 8, 4,[],'Normal'),
        new Room('200', 114, 31, 6, 4,[],'Normal'),
        new Room('201', 120, 31, 5, 4,[],'Normal'),
        new Room('202', 125, 31, 5, 4,[],'Normal'),
        new Room('203', 130, 31, 5, 4,[],'Normal'),

        new Room('221', 147, 25, 9, 11,[],'Normal'),
        new Room('226', 130, 37, 5, 3,[],'Normal'),
        new Room('228', 130, 40, 5, 3,[],'Normal'),
        new Room('230', 130, 43, 5, 3,[],'Normal'),
        new Room('232', 122, 48, 6, 3,[],'Normal'),
        new Room('234', 127, 46, 8, 5,[],'Normal'),
        new Room('235', 122, 46, 5, 2,[],'Normal'),
        new Room('240/241', 116, 37, 14, 9,[],'Normal'),


        new Room('225', 138, 36, 18, 5,[],'Normal'),
        new Room('229', 138, 41, 18, 5,[],'Normal'),
        new Room('231', 138, 46, 18, 5,[],'Normal'),
        new Room('stairs1', 138, 51, 10, 2,[],'Normal'),
        new Room('305', 138, 53, 10, 4,[],'Normal'),
        new Room('311', 138, 57, 9, 4,[],'Normal'),
        new Room('313', 138, 61, 9, 4,[],'Normal'),
        new Room('315', 138, 65, 9, 4,[],'Normal'),
        new Room('317', 138, 69, 9, 4,[],'Normal'),
        new Room('319', 138, 73, 9, 4,[],'Normal'),
        new Room('321', 138, 77, 9, 4,[],'Normal'),
        new Room('stairs2', 138, 82, 9, 3,[],'Normal'),

        new Room('Courtyard5', 116, 51, 10, 10,[],'Normal'),
        new Room('boys br1', 126, 51, 9, 2,[],'Normal'),
        new Room('girls br1', 126, 53, 9, 2,[],'Normal'),
        new Room('fake 322', 126, 55, 9, 3,[],'Normal'),
        new Room('312', 126, 58, 9, 3,[],'Normal'),

        new Room('Courtyard4', 116, 63, 10, 8,[],'Normal'),
        new Room('314', 126, 63, 9, 4,[],'Normal'),
        new Room('316', 126, 67, 9, 4,[2,2],'Normal'),
        new Room('318', 126, 73, 9, 4,[],'Normal'),
        new Room('320', 126, 77, 9, 4,[],'Normal'),
        new Room('322', 126, 81, 9, 4,[],'Normal'),








      ]);
    }else {

      return new Map ('2nd Floor', [

        new Room('Boys BR', 0, 0, 8, 2,[],'Normal'),
        new Room('girls BR', 0, 2, 8, 2,[],'Normal'),
        new Room('workroom', 0, 4, 8, 5,[],'Normal'),
        new Room('412', 0, 9, 8, 4,[],'Normal'),
        new Room('414', 0, 12, 8, 4,[],'Normal'),
        new Room('416', 0, 16, 8, 4,[],'Normal'),
        new Room('418', 0, 19, 8, 4,[],'Normal'),
        new Room('420', 0, 22, 8, 4,[],'Normal'),
        new Room('422', 0, 26, 8, 4,[],'Normal'),
        new Room('Storage', 0, 30, 8, 3,[],'Normal'),

        new Room('stairs', 12, 0, 9, 2,[],'Normal'),
        new Room('Workroom', 12, 2, 9, 5,[],'Normal'),
        new Room('411', 12, 6, 9, 4,[],'Normal'),
        new Room('413', 12, 10, 9, 4,[],'Normal'),
        new Room('415', 12, 14, 9, 4,[],'Normal'),
        new Room('417', 12, 18, 9, 3,[],'Normal'),
        new Room('419', 12, 21, 9, 4,[],'Normal'),
        new Room('421', 12, 25, 9, 3,[],'Normal'),
        new Room('storage', 12, 28, 9, 3,[],'Normal'),
        new Room('stairs', 14, 31, 8, 2,[],'Normal'),
      ]);
    }
}




}
