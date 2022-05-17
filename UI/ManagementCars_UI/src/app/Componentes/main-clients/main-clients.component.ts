import { Router } from '@angular/router';
import { Client } from './../../Models/Entity/Client';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-clients',
  templateUrl: './main-clients.component.html',
  styleUrls: ['./main-clients.component.scss']
})
export class MainClientsComponent implements OnInit {

  constructor(private clientService:ClientService,
              private router:Router) { }

  clients!:Client[];
  clientChoose!:Client;
  choose:boolean = false;

  ngOnInit(): void {
    this.clientService.GetClients()
    .subscribe(
        data=>{
          this.clients = data;
        }
    )
  }

  show(index:number):void{
    this.clientChoose = this.clients[index];
    this.choose = true;
  }

  closeClientMain():void{
    this.choose = false;
  }

  displayImg:boolean = false;
  changeDisplay(change:boolean)
  {
    this.displayImg = change;
  }

  delete(index:number):void{
    this.clientService.DeleteClient(this.clients[index].id)
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
    this.router.navigate(['WorkerJob/updateClients/',this.clients[index].id])
  }

}
