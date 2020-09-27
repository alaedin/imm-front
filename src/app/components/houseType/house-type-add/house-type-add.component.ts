import { Component, OnInit } from '@angular/core';
import {HouseTypeService} from '../../../services/houseType/house-type.service';

@Component({
  selector: 'app-house-type-add',
  templateUrl: './house-type-add.component.html',
  styleUrls: ['./house-type-add.component.css']
})
export class HouseTypeAddComponent implements OnInit {

  houseType = {
    houseTypeName: ''
  };

  submitted = false;

  constructor(private houseTypeService: HouseTypeService) { }

  ngOnInit(): void {
  }

  saveHouseType(): void {
    const data = {
      houseTypeName: this.houseType.houseTypeName,
    };
    this.houseTypeService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        }
      );
  }
  newHouseType(): void{
    this.submitted = false;
    this.houseType = {
      houseTypeName: ''
    };
  }


}
