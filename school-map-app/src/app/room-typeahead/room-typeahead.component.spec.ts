import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomTypeaheadComponent } from './room-typeahead.component';

describe('RoomTypeaheadComponent', () => {
  let component: RoomTypeaheadComponent;
  let fixture: ComponentFixture<RoomTypeaheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomTypeaheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomTypeaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
