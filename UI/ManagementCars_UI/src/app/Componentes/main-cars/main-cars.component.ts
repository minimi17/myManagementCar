import { Router } from '@angular/router';
import { CarService } from './../../services/car.service';
import { Car } from './../../Models/Entity/Car';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-cars',
  templateUrl: './main-cars.component.html',
  styleUrls: ['./main-cars.component.scss']
})
export class MainCarsComponent implements OnInit {

  constructor(private carService:CarService,
    private router:Router) { }

  cars!:Car[];
  carChoose!:Car;
  choose:boolean = false;

  ngOnInit(): void {
    this.carService.GetCars()
    .subscribe(
        data=>{
          this.cars = data;
        }
    )
  }

  show(index:number){
    this.carChoose = this.cars[index];
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
    this.carService.deleteCar(this.cars[index].number)
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
    this.router.navigate(['ManagerJob/updateCar/',this.cars[index].number])
  }

}
