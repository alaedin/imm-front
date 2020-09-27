import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseTypeAddComponent } from './house-type-add.component';

describe('HouseTypeAddComponent', () => {
  let component: HouseTypeAddComponent;
  let fixture: ComponentFixture<HouseTypeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseTypeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
