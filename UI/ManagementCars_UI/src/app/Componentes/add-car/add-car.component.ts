import { CarService } from './../../services/car.service';
import { NgForm } from '@angular/forms';
import { AddCar } from './../../Models/DTO/addCar';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {

  constructor(private carService:CarService) { }

  ngOnInit(): void {
  }

  car:AddCar={
    color:'',
    model:'',
    number:'',
    rentalCost:0,
    year:0,
    specialLetters:'',
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

  add(form:NgForm){

    this.carService.addCar(this.car).subscribe(
      data=>{
        alert('Add successful !')
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

}
