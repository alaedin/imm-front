import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HouseTypeListComponent} from './components/houseType/house-type-list/house-type-list.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HouseTypeDetailsComponent} from './components/houseType/house-type-details/house-type-details.component';
import {HouseTypeAddComponent} from './components/houseType/house-type-add/house-type-add.component';
import {RegisterComponent} from './components/auth/register/register.component';
import {ConnectionComponent} from './components/auth/connection/connection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { LoginComponent } from './components/auth/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatSnackBarComponent } from './components/utils/mat-snack-bar/mat-snack-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HouseTypeAddComponent,
    HouseTypeListComponent,
    HouseTypeDetailsComponent,
    HouseTypeAddComponent,
    RegisterComponent,
    ConnectionComponent,
    LoginComponent,
    MatSnackBarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,

  ],
  providers: [MatSnackBarComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
