import {Component, OnInit} from '@angular/core';
import {HouseTypeService} from '../../../services/houseType/house-type.service';
import {HouseType} from '../../../entity/house-type';

@Component({
  selector: 'app-house-type-list',
  templateUrl: './house-type-list.component.html',
  styleUrls: ['./house-type-list.component.css']
})
export class HouseTypeListComponent implements OnInit {

  houseTypes: any;
  currentHouseType = null;
  currentIndex = -1;
  houseType = new HouseType();
  displayedColumns: string[] = ['id', 'houseTypeName'];

  constructor(private houseTypeService: HouseTypeService) {
  }

  ngOnInit(): void {
    this.retrieveHouseTypes();
  }

  retrieveHouseTypes(): void {
    this.houseTypeService.getAll()
      .subscribe(
        data => {
          this.houseTypes = data;
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
          this.houseTypes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.houseTypes.filter = filterValue.trim().toLowerCase();
  }
}
