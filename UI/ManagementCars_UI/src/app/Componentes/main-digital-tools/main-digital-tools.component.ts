import { Router } from '@angular/router';
import { digitalTools } from './../../Models/Entity/DigitalTools';
import { DigitalToolsService } from './../../services/digital-tools.service';
import { WorkerService } from './../../services/worker.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-digital-tools',
  templateUrl: './main-digital-tools.component.html',
  styleUrls: ['./main-digital-tools.component.scss']
})
export class MainDigitalToolsComponent implements OnInit {

  constructor(private digitalToolsService:DigitalToolsService,
    private router:Router) { }

  digitalTools!:digitalTools[];
  digitalToolsChoose!:digitalTools;
  choose:boolean = false;

  ngOnInit(): void {
    this.digitalToolsService.GetDigitalTools()
    .subscribe(
        data=>{
          this.digitalTools = data;
        }
    )
  }

  show(index:number){
    this.digitalToolsChoose = this.digitalTools[index];
    this.choose = true;
  }

  closedigitalToolsMain(){
    this.choose = false;
  }

  displayImg:boolean = false;
  changeDisplay(change:boolean)
  {
    this.displayImg = change;
  }


  delete(index:number):void{
    this.digitalToolsService.DeleteDigitalTools(this.digitalTools[index].id)
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
    this.router.navigate(['ManagerJob/updateDigitalTools/',this.digitalTools[index].id])
  }

}
