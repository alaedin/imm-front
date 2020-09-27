import {Component, OnInit} from '@angular/core';
import {Role} from '../../../entity/role';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  constructor(private  httpClient: HttpClient) {
  }

  tabConnexion = ['Connexion', 'SignUp'];
  role: Role[];

  ngOnInit(): void {
    this.getAllRole();
  }

  updateConnexionButton(tabSelected): string {
    if (tabSelected === 0) {
      return this.tabConnexion[0];
    } else {
      return this.tabConnexion[1];
    }
    return this.tabConnexion[0];
  }


  private getAllRole() {

  }
}
