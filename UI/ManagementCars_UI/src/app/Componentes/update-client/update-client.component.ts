import { Client } from './../../Models/Entity/Client';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from './../../services/client.service';
import { NgForm } from '@angular/forms';
import { AddClient } from './../../Models/DTO/addClient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.scss']
})
export class UpdateClientComponent implements OnInit {


  constructor(private clientService:ClientService,
              private myRoute:ActivatedRoute) { }

  date!:string;

  client!:Client;
  id!:string;

  ngOnInit(): void {
    this.myRoute.paramMap.subscribe( (myPar) =>
    {
      this.id = myPar.get('id')!;
    })

    this.clientService.GetClient(this.id)
    .subscribe(
        data=>
        {
           this.client = data;
        },
        (err)=>
        {
          alert(err.error);
        }

    )
  }


  update(form:NgForm){



    this.clientService.updateClient(this.id,this.client).subscribe(
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




}
