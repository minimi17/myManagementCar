import { UpdateWorkerComponent } from './Componentes/update-worker/update-worker.component';
import { UpdateDigitalToolsComponent } from './Componentes/update-digital-tools/update-digital-tools.component';
import { UpdateDepartmentComponent } from './Componentes/update-department/update-department.component';
import { UpdateCarComponent } from './Componentes/update-car/update-car.component';
import { UpdateClientComponent } from './Componentes/update-client/update-client.component';
import { ShowClientComponent } from './Componentes/show-client/show-client.component';
import { AddClient } from './Models/DTO/addClient';
import { AddWorker } from './Models/DTO/addWorker';
import { PageHomeComponent } from './Componentes/page-home/page-home.component';

import { PageWorkerComponent } from './Componentes/page-worker/page-worker.component';
import { PageClientComponent } from './Componentes/page-client/page-client.component';
import { MyDetailsWorkerComponent } from './Componentes/my-details-worker/my-details-worker.component';
import { MyDetailsClientComponent } from './Componentes/my-details-client/my-details-client.component';
import { MainDepartmentsComponent } from './Componentes/main-departments/main-departments.component';
import { MainDigitalToolsComponent } from './Componentes/main-digital-tools/main-digital-tools.component';
import { MainWorkerComponent } from './Componentes/main-worker/main-worker.component';
import { MainClientsComponent } from './Componentes/main-clients/main-clients.component';
import { MainCarsWithDigitalToolsComponent } from './Componentes/main-cars-with-digital-tools/main-cars-with-digital-tools.component';
import { MainCarsComponent } from './Componentes/main-cars/main-cars.component';
import { AddCarToClientComponent } from './Componentes/addCarToClient/addCarToClient.component';
import { AddDigitalToolsComponent } from './Componentes/add-digital-tools/add-digital-tools.component';
import { AddCarWithDigitalToolsComponent } from './Componentes/add-car-with-digital-tools/add-car-with-digital-tools.component';
import { AddDepartmentComponent } from './Componentes/add-department/add-department.component';
import { AddWorkerComponent } from './Componentes/add-worker/add-worker.component';
import { AddClientComponent } from './Componentes/add-client/add-client.component';
import { AddCarComponent } from './Componentes/add-car/add-car.component';
import { LoginUserComponent } from './Componentes/login-user/login-user.component';
import { LoginWorkerComponent } from './Componentes/login-worker/login-worker.component';
import { GeneralGurd } from './general.gurd';
import { ClientGurd } from './client.gurd';
import { ManagerGurd } from './manager.gurd';

import { PageNotFoundComponent } from './Componentes/page-not-found/page-not-found.component';
import { HomeComponent } from './Componentes/home/home.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateCarWithDigitalToolsComponent } from './Componentes/update-car-with-digital-tools/update-car-with-digital-tools.component';

const routes: Routes = [


  {path:'',
   component:HomeComponent
  },
  {

    path:'Login/Worker',
    component:LoginWorkerComponent
  },
  {
    path:'Login/User',
    component:LoginUserComponent
  },

  {
    path:'Client/:id',
    component:PageClientComponent,
    canActivate:[ClientGurd]

  },

  {
    path:'Client/:id/ShowDetails',
    component:MyDetailsClientComponent,
    canActivate:[ClientGurd]
  },

  {
    path:'Worker/:idWorker',
    component:PageWorkerComponent,
    canActivate:[GeneralGurd]
  },

  {
    path:'Worker/:idWorker/ShowDetails',
    component:MyDetailsWorkerComponent,
    canActivate:[GeneralGurd]
  },



  {
    path:'WorkerJob',
    component:PageWorkerComponent,
    canActivate:[GeneralGurd]
  },


  {
    path:'WorkerJob/addClient',
    component:AddClientComponent,
    canActivate:[GeneralGurd]
  },

  {
    path:'WorkerJob/showClients',
    component:MainClientsComponent,
    canActivate:[GeneralGurd]
  },


  {
    path:'WorkerJob/updateClients/:id',
    component:UpdateClientComponent,
    canActivate:[GeneralGurd]
  },

  {
    path:'WorkerJob/addRental',
    component:AddCarToClientComponent,
    canActivate:[GeneralGurd]
  },



  {
    path:'ManagerJob',
    component:PageWorkerComponent,
    canActivate:[GeneralGurd]
  },
  {
    path:'ManagerJob/addWorker',
    component:AddWorkerComponent,
    canActivate:[ManagerGurd]
  },

  {
    path:'ManagerJob/showWorker',
    component:MainWorkerComponent,
    canActivate:[ManagerGurd]
  },

  {
    path:'ManagerJob/UpdateWorker/:id',
    component:UpdateWorkerComponent,
    canActivate:[ManagerGurd]
  },

  {
    path:'ManagerJob/addCarWithDigitalTools',
    component:AddCarWithDigitalToolsComponent,
    canActivate:[ManagerGurd]
  },

  {
    path:'ManagerJob/showCarWithDigitalTools',
    component:MainCarsWithDigitalToolsComponent,
    canActivate:[ManagerGurd]
  },


  {
    path:'ManagerJob/updateCarWithDigitalTools/:id/:numberCar',
    component:UpdateCarWithDigitalToolsComponent,
    canActivate:[ManagerGurd]
  },



  {
    path:'ManagerJob/addCar',
    component:AddCarComponent,
    canActivate:[ManagerGurd]
  },

  {
    path:'ManagerJob/showCar',
    component:MainCarsComponent,
    canActivate:[ManagerGurd]
  },


  {
    path:'ManagerJob/updateCar/:numberCar',
    component:UpdateCarComponent,
    canActivate:[ManagerGurd]
  },



  {
    path:'ManagerJob/addDepartment',
    component:AddDepartmentComponent,
    canActivate:[ManagerGurd]
  },

  {
    path:'ManagerJob/showDepartment',
    component:MainDepartmentsComponent,
    canActivate:[ManagerGurd]
  },


  {
    path:'ManagerJob/updateDepartment/:name',
    component:UpdateDepartmentComponent,
    canActivate:[ManagerGurd]
  },



  {
    path:'ManagerJob/addDigitalTools',
    component:AddDigitalToolsComponent,
    canActivate:[ManagerGurd]
  },

  {
    path:'ManagerJob/showDigitalTools',
    component:MainDigitalToolsComponent,
    canActivate:[ManagerGurd]
  },


  {
    path:'ManagerJob/updateDigitalTools/:id',
    component:UpdateDigitalToolsComponent,
    canActivate:[ManagerGurd]
  },

  //  {
  //    path:'Client',
  //    component:PageClientComponent
  //  },
  //  {
  //    path:'Client/:id',
  //    component:Learn2Component
  //  },

  // {
  //   path:'Login/Client',
  //   component:LoginUserComponent
  // },
  // {
  //   path:'General',
  //   component:WorkerComponent,
  //   canActivate:[GeneralGurd],
  //   children:[
  //     {
  //       path:':edit',
  //       component:WorkerComponent
  //     }
  //   ]
  // },
  // {
  //   path:'Manager',
  //   component:ManagerComponent,
  //   canActivate:[ManagerGurd]
  // },
  // {
  //   path:'Client',
  //   component:ManagerComponent,
  //   canActivate:[ClientGurd]
  // },
  {
    path: 'ManagementCars404', component: PageNotFoundComponent
  },

  {
    path:'**',  redirectTo:'ManagementCars404'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
