import { ClientService } from './../../services/client.service';
import { NgForm } from '@angular/forms';
import { AddClient } from './../../Models/DTO/addClient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  constructor(private clientService:ClientService) { }

  date!:string;
  ngOnInit(): void {
    this.date=new Date().toISOString().slice(0, 10);
  }

  client:AddClient={
    firstName:'',
    lastName:'',
    id:'',
    phoneNumber:'',
    bornDate:new Date(),
    VIP:false
  }

  add(form:NgForm){

    this.clientService.AddClient(this.client).subscribe(
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
