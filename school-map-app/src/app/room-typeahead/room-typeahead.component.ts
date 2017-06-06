import {Component, Injectable, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Http, Response } from '@angular/http';

import {SchoolMap} from '../room/map';
import {SchoolMapService} from '../school-map.service';

import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
/*import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
*/
import 'rxjs/add/operator/debounceTime';
/*import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';*/
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';




@Component({
  selector: 'app-room-typeahead',
  templateUrl: './room-typeahead.component.html',
})

export class RoomTypeaheadComponent implements OnInit {

  private rooms:any;
  @Input() model: any;



  @Output() onSelectRoom = new EventEmitter<any>();



  private resultOptionsSubject: Subject<any> = new Subject<any>();

  ngOnInit() { }


  constructor(private schoolMapService:SchoolMapService) {
    this.rooms =  this.schoolMapService.getRooms();
  }



  search = (text$: Observable<string>) =>
    this.resultOptionsSubject.merge(text$.debounceTime(200).map(t=> {return {term:t}} ))

      .map(termObj => {
        if(termObj.showAll) {
          return this.rooms.slice();
        }
        if(termObj.term) {
          return this.rooms.filter(v => new RegExp(termObj.term, 'gi').test(v.name));
        }
        return [];
      })

  formatter = x => x.name + ' ' + (x.nFloor ? '2F' : '1F');

  roomSelected(selectedItem:any) {
    this.onSelectRoom.emit(selectedItem.item);
  }

  showAll(ev) {
    ev.stopPropagation();
    this.resultOptionsSubject.next({showAll:true})
  }

}
