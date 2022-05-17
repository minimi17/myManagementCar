import { Router } from '@angular/router';
import { CarAndDigitalTools } from './../../Models/Entity/CarAndDigitalTools';
import { CarAndDigitalToolsService } from './../../services/car-and-digital-tools.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-cars-with-digital-tools',
  templateUrl: './main-cars-with-digital-tools.component.html',
  styleUrls: ['./main-cars-with-digital-tools.component.scss']
})
export class MainCarsWithDigitalToolsComponent implements OnInit {

  constructor(private carAndDigitalToolsService:CarAndDigitalToolsService ,
   private  router: Router  ) {}

  carsAndDigitalTools!:CarAndDigitalTools[];
  carsAndDigitalToolsChoose!:CarAndDigitalTools[];
  choose:boolean = false;

  ngOnInit(): void {
    this.carAndDigitalToolsService.GetCarAndDigitalTools()
    .subscribe(
        data=>{
          this.carsAndDigitalTools = data;
        }
    )
  }

  show(numberCar:string){
    this.carsAndDigitalToolsChoose = this.carsAndDigitalTools.filter(carsAndDigitalTools=>carsAndDigitalTools.numberCar == numberCar);
    this.choose = true;
  }

  closeCarMain(){
    this.choose = false;
  }

  displayImg:boolean = false;
  changeDisplay(change:boolean)
  {
    this.displayImg = change;
  }

  delete(index:number):void{
    this.carAndDigitalToolsService.DeleteCarAndDigitalTools(this.carsAndDigitalTools[index].numberCar,this.carsAndDigitalTools[index].idDigitalTools)
    .subscribe(
      data=>
      {
        alert('Delete successful');
        this.router.navigate(['WorkerJob'])
      },
      (err)=>
      {
        alert(err.error)
      }
    )
  }

  update(index:number):void
  {
    this.router.navigate(['ManagerJob/updateCarWithDigitalTools',this.carsAndDigitalTools[index].idDigitalTools,this.carsAndDigitalTools[index].numberCar])
  }

}
