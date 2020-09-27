import {Component, OnInit} from '@angular/core';
import {HouseTypeService} from '../../../services/houseType/house-type.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-house-type-details',
  templateUrl: './house-type-details.component.html',
  styleUrls: ['./house-type-details.component.css']
})
export class HouseTypeDetailsComponent implements OnInit {

  currentHouseType = null;
  message = '';

  constructor(private houseTypeService: HouseTypeService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.message = '';
    this.getHouseType(this.route.snapshot.paramMap.get('id'));
  }

  getHouseType(id): void {
    this.houseTypeService.get(id)
      .subscribe(
        data => {
          this.currentHouseType = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  updateHouseType(): void {
    this.houseTypeService.update(this.currentHouseType.id, this.currentHouseType)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'House Type was updated successfully';
        },
        error => {
          console.log(error);
        }
      );
  }

  deleteHouseType(): void {
    this.houseTypeService.delete(this.currentHouseType.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/house-type']);
        },
        error => {
          console.log(error);
        }
      );
  }

}
