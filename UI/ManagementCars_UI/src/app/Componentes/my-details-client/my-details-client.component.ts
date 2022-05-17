import { ActivatedRoute } from '@angular/router';
import { ClientService } from './../../services/client.service';
import { Client } from './../../Models/Entity/Client';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-details-client',
  templateUrl: './my-details-client.component.html',
  styleUrls: ['./my-details-client.component.scss']
})
export class MyDetailsClientComponent implements OnInit {

  constructor(private clientService:ClientService,
              private myRoute:ActivatedRoute ) { }

  client!:Client;
  id!:string;
  ngOnInit(): void {

    this.myRoute.paramMap.subscribe( (myParamters) =>
    {
      this.id = myParamters.get('id')!;
    })

    this.clientService.GetClient(this.id)
    .subscribe(
      data=>{
        this.client = data;
      }
    )
  }



}
