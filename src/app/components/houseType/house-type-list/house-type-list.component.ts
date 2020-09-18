import {Component, OnInit} from '@angular/core';
import {HouseTypeService} from '../../../services/houseType/house-type.service';

@Component({
  selector: 'app-house-type-list',
  templateUrl: './house-type-list.component.html',
  styleUrls: ['./house-type-list.component.css']
})
export class HouseTypeListComponent implements OnInit {

  HouseTypes: any;
  currentHouseType = null;
  currentIndex = -1;
  houseType = '';

  constructor(private houseTypeService: HouseTypeService) {
  }

  ngOnInit(): void {
    this.retrieveHouseTypes();
  }

  retrieveHouseTypes(): void {
    this.houseTypeService.getAll()
      .subscribe(
        data => {
          this.HouseTypes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  refreshList(): void {
    this.retrieveHouseTypes();
    this.currentHouseType = null;
    this.currentIndex = -1;
  }

  setActiveHouseType(houseType, index): void {
    this.currentHouseType = houseType;
    this.currentIndex = index;
  }

  removeAllHouseType(): void {
    this.houseTypeService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveHouseTypes();
        },
        error => {
          console.log(error);
        }
      );
  }

  searchHouseType(): void {
    this.houseTypeService.getByHouseTypeName(this.houseType)
      .subscribe(
        data => {
          this.HouseTypes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }
}
