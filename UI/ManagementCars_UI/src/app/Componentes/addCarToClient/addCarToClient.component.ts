import { ClientService } from './../../services/client.service';
import { CarService } from './../../services/car.service';
import { AddCarToClient } from './../../Models/DTO/addCarToClient';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addCarToClient',
  templateUrl: './addCarToClient.component.html',
  styleUrls: ['./addCarToClient.component.scss']
})
export class AddCarToClientComponent implements OnInit {

  constructor(private clientService:ClientService) { }

  ngOnInit() {
  }

  addCarToClient:AddCarToClient={
    idClient:'',
    numberCar:''
  }
  add(form:NgForm){

    this.clientService.addCarClient(this.addCarToClient.idClient,this.addCarToClient).subscribe(
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
