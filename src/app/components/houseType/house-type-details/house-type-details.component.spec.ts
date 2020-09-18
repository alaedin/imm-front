import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseTypeDetailsComponent } from './house-type-details.component';

describe('HouseTypeDetailsComponent', () => {
  let component: HouseTypeDetailsComponent;
  let fixture: ComponentFixture<HouseTypeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseTypeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseTypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
