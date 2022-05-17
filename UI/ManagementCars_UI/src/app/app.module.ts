import { AddCarToClientComponent } from './Componentes/addCarToClient/addCarToClient.component';
import { ClientGurd } from './client.gurd';
import { GeneralGurd } from './general.gurd';
import { ManagerGurd } from './manager.gurd';

import { PageNotFoundComponent } from './Componentes/page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './Componentes/home/home.component';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { LoginUserComponent } from './Componentes/login-user/login-user.component';
import { LoginWorkerComponent } from './Componentes/login-worker/login-worker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';



import {MatSelectModule} from '@angular/material/select';
import { AddCarComponent } from './Componentes/add-car/add-car.component';
import { AddWorkerComponent } from './Componentes/add-worker/add-worker.component';
import { AddClientComponent } from './Componentes/add-client/add-client.component';
import { AddCarWithDigitalToolsComponent } from './Componentes/add-car-with-digital-tools/add-car-with-digital-tools.component';
import { AddDepartmentComponent } from './Componentes/add-department/add-department.component';
import { AddDigitalToolsComponent } from './Componentes/add-digital-tools/add-digital-tools.component';
import { ShowCarComponent } from './Componentes/show-car/show-car.component';
import { ShowCarWithDigitalToolsComponent } from './Componentes/show-car-with-digital-tools/show-car-with-digital-tools.component';
import { ShowClientComponent } from './Componentes/show-client/show-client.component';
import { ShowDepartmentComponent } from './Componentes/show-department/show-department.component';
import { ShowDigitalToolsComponent } from './Componentes/show-digital-tools/show-digital-tools.component';
import { ShowWorkerComponent } from './Componentes/show-worker/show-worker.component';
import { MainCarsComponent } from './Componentes/main-cars/main-cars.component';
import { MainCarsWithDigitalToolsComponent } from './Componentes/main-cars-with-digital-tools/main-cars-with-digital-tools.component';
import { MainClientsComponent } from './Componentes/main-clients/main-clients.component';
import { MainDepartmentsComponent } from './Componentes/main-departments/main-departments.component';
import { MainDigitalToolsComponent } from './Componentes/main-digital-tools/main-digital-tools.component';
import { MainWorkerComponent } from './Componentes/main-worker/main-worker.component';
import { MyDetailsWorkerComponent } from './Componentes/my-details-worker/my-details-worker.component';
import { MyDetailsClientComponent } from './Componentes/my-details-client/my-details-client.component';
import { PageHomeComponent } from './Componentes/page-home/page-home.component';
import { PageWorkerComponent } from './Componentes/page-worker/page-worker.component';
import { PageClientComponent } from './Componentes/page-client/page-client.component';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { UpdateCarComponent } from './Componentes/update-car/update-car.component';
import { UpdateClientComponent } from './Componentes/update-client/update-client.component';
import { UpdateDepartmentComponent } from './Componentes/update-department/update-department.component';
import { UpdateDigitalToolsComponent } from './Componentes/update-digital-tools/update-digital-tools.component';
import { UpdateWorkerComponent } from './Componentes/update-worker/update-worker.component';
import { UpdateCarWithDigitalToolsComponent } from './Componentes/update-car-with-digital-tools/update-car-with-digital-tools.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginUserComponent,
    LoginWorkerComponent,
    AddCarComponent,
    AddWorkerComponent,
    AddClientComponent,
    AddCarWithDigitalToolsComponent,
    AddDepartmentComponent,
    AddDigitalToolsComponent,
    AddCarToClientComponent,
    ShowCarComponent,
    ShowCarWithDigitalToolsComponent,
    ShowClientComponent,
    ShowDepartmentComponent,
    ShowDigitalToolsComponent,
    ShowWorkerComponent,
    MainCarsComponent,
    MainCarsWithDigitalToolsComponent,
    MainClientsComponent,
    MainDepartmentsComponent,
    MainDigitalToolsComponent,
    MainWorkerComponent,
    MyDetailsWorkerComponent,
    MyDetailsClientComponent,
    PageHomeComponent,
    PageWorkerComponent,
    PageClientComponent,
    UpdateCarComponent,
    UpdateClientComponent,
    UpdateDepartmentComponent,
    UpdateDigitalToolsComponent,
    UpdateWorkerComponent,
    UpdateCarWithDigitalToolsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    NoopAnimationsModule,
    MatButtonModule

  ],
  providers: [ManagerGurd,GeneralGurd,ClientGurd,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
