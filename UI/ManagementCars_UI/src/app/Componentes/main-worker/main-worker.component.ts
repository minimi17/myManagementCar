import { Router } from '@angular/router';
import { Worker } from './../../Models/Entity/Worker';
import { WorkerService } from './../../services/worker.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-worker',
  templateUrl: './main-worker.component.html',
  styleUrls: ['./main-worker.component.scss']
})
export class MainWorkerComponent implements OnInit {

  constructor(private workerService:WorkerService,
    private router:Router) { }

  workerss!:Worker[];
  workerChoose!:Worker;
  choose:boolean = false;

  ngOnInit(): void {
    this.workerService.GetWorkers()
    .subscribe(
        data=>{
          this.workerss = data;
        }
    )
  }

  show(index:number){
    this.workerChoose = this.workerss[index];
    this.choose = true;
  }

  closeWorkerMain(){
    this.choose = false;
  }

  displayImg:boolean = false;
  changeDisplay(change:boolean)
  {
    this.displayImg = change;
  }

  delete(index:number):void{
    this.workerService.DeleteWorker(this.workerss[index].id)
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
    this.router.navigate(['ManagerJob/UpdateWorker/',this.workerss[index].id])
  }

}
