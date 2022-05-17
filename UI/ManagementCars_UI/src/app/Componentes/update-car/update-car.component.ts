import { NgForm } from '@angular/forms';
import { Car } from './../../Models/Entity/Car';
import { ActivatedRoute } from '@angular/router';
import { CarService } from './../../services/car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.scss'],
})
export class UpdateCarComponent implements OnInit {
  constructor(
    private carService: CarService,
    private myRoute: ActivatedRoute
  ) {}


  car!: Car;
  number!: string;

  ngOnInit(): void {
    this.myRoute.paramMap.subscribe((myPar) => {
      this.number = myPar.get('numberCar')!;
    });

    this.carService.GetCar(this.number).subscribe(
      (data) => {
        this.car = data;
      },
      (err) => {
        alert(err.error);
      }
    );
  }

  update(form:NgForm){



    this.carService.updateCar(this.number,this.car).subscribe(
      data=>{
        alert('Update successful !')
        const confirmAction = confirm("Would you like to reset the form?");
        if (confirmAction) {
           form.reset();
        }
      },
      (err)=>{
        alert(err.error);
      }
    )

  }

  specialLetters:string[]=[
    "IL",
    "PD",
    ""
  ]

  carModels:{value:string,text:string,img:string}[] = [
    {value:'Alfa Romeo C4',text:'Alfa Romeo C4',img:'../assets/Images/Cars/Alfa Romeo C4.jpg'},
    {value:'Audi A-series',text:'Audi A-series',img:'../assets/Images/Cars/Audi A-series.jpg'},
    {value:'BMW Sedan',text:'BMW Sedan',img:'../assets/Images/Cars/BMW Sedan.jpg'},
    {value:'Ford Taurus',text:'Ford Taurus',img:'../assets/Images/Cars/Ford Taurus.jpg'},
    {value:'Mercedez Benz',text:'Mercedez Benz',img:'../assets/Images/Cars/Mercedez Benz.jpg'},
    {value:'Tesla Model X',text:'Tesla Model X',img:'../assets/Images/Cars/Tesla Model X.jpg'},

  ]
}
