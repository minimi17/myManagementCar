import { WorkerService } from './../../services/worker.service';
import { AddWorker } from './../../Models/DTO/addWorker';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.scss']
})
export class AddWorkerComponent implements OnInit {

  constructor(private workerService:WorkerService) { }



  worker:AddWorker={
    firstName:'',
    lastName:'',
    id:'',
    joinIn:new Date(),
    password:'',
    role:'',
    salary:0
  }

  roles:string[]=[
    'General',
    'Management',
  ]

  date!:string;
  ngOnInit(): void {
    this.date=new Date().toISOString().slice(0, 10);
  }
  add(form:NgForm){

    this.workerService.addWorker(this.worker).subscribe(
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
