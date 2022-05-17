import { CarAndDigitalToolsService } from './../../services/car-and-digital-tools.service';
import { NgForm } from '@angular/forms';
import { AddCarWithDigitalTools } from './../../Models/DTO/addCarWithDigitalTools';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-car-with-digital-tools',
  templateUrl: './add-car-with-digital-tools.component.html',
  styleUrls: ['./add-car-with-digital-tools.component.scss']
})
export class AddCarWithDigitalToolsComponent implements OnInit {

  constructor(private carAndDigitalToolsService : CarAndDigitalToolsService) { }

  ngOnInit(): void {
  }


  // carWithDigitalTools:AddCarWithDigitalTools;

  addCarWithDigitalTools:AddCarWithDigitalTools={
   idDigitTools:0,
   numberCar:'',
  }
  add(form:NgForm){

    this.carAndDigitalToolsService.AddCarAndDigitalTools(this.addCarWithDigitalTools).subscribe(
      data=>{
        alert('Add successful !')

        this.carAndDigitalToolsService.setCarPrice(this.addCarWithDigitalTools.numberCar).subscribe(
          data=>{
            alert(`New Price its - ${data}`)
          }
        )
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
