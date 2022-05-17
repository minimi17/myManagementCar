import { Worker } from './../../Models/Entity/Worker';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show-worker',
  templateUrl: './show-worker.component.html',
  styleUrls: ['./show-worker.component.scss']
})
export class ShowWorkerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()worker!:Worker
  @Output()closeCar = new EventEmitter();

  close(){

    this.closeCar.emit();
  }

}
