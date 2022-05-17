import { ActivatedRoute } from '@angular/router';
import { Worker } from './../../Models/Entity/Worker';
import { WorkerService } from './../../services/worker.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-details-worker',
  templateUrl: './my-details-worker.component.html',
  styleUrls: ['./my-details-worker.component.scss']
})
export class MyDetailsWorkerComponent implements OnInit {

  constructor(private workerService:WorkerService,
    private myRoute:ActivatedRoute) { }

  worker!:Worker;
  id!:string;
  ngOnInit(): void {

    this.myRoute.paramMap.subscribe( (myParamters) =>
    {
      this.id = myParamters.get('idWorker')!;
    })

    this.workerService.GetWorker(this.id)
    .subscribe(
      data=>{
        this.worker = data;
      }
    )
  }

}
