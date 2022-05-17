import { AddWorker } from './../../Models/DTO/addWorker';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { WorkerService } from './../../services/worker.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-worker',
  templateUrl: './update-worker.component.html',
  styleUrls: ['./update-worker.component.scss']
})
export class UpdateWorkerComponent implements OnInit {

  constructor(
    private workerService: WorkerService,
    private myRoute: ActivatedRoute
  ) {}

  worker!: AddWorker;
  id!: string;

  ngOnInit(): void {

    this.date=new Date().toISOString().slice(0, 10);

    this.myRoute.paramMap.subscribe((myPar) => {
      this.id = myPar.get('id')!;
    });

    this.workerService.GetWorker(this.id).subscribe(
      (data) => {
        this.worker = data;
      },
      (err) => {
        alert(err.error);
      }
    );
  }

  roles:string[]=[
    'General',
    'Management',
  ]

  date!:string;

  update(form: NgForm) {
    this.workerService.PutWorker(this.id, this.worker).subscribe(
      (data) => {
        alert('Update successful !');
        const confirmAction = confirm('Would you like to reset the form?');
        if (confirmAction) {
          form.reset();
        }
      },
      (err) => {
        alert(err.error);
      }
    );
  }
}
