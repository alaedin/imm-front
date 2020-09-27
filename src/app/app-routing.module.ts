import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HouseTypeListComponent} from './components/houseType/house-type-list/house-type-list.component';
import {HouseTypeDetailsComponent} from './components/houseType/house-type-details/house-type-details.component';
import {HouseTypeAddComponent} from './components/houseType/house-type-add/house-type-add.component';
import {ConnectionComponent} from './components/auth/connection/connection.component';
import {NavComponent} from './components/dashboard/nav/nav.component';

const routes: Routes = [
  {path: 'house-type', component: HouseTypeListComponent},
  {path: 'house-type/:id', component: HouseTypeDetailsComponent},
  {path: 'house-type/add', component: HouseTypeAddComponent},
  {path: 'connexion', component: ConnectionComponent},
  {path: 'dashboard', component: NavComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
