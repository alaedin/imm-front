import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseTypeListComponent } from './house-type-list.component';

describe('HouseTypeListComponent', () => {
  let component: HouseTypeListComponent;
  let fixture: ComponentFixture<HouseTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
