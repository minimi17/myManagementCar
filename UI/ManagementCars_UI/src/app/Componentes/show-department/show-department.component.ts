
import { Department } from './../../Models/Entity/Department';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show-department',
  templateUrl: './show-department.component.html',
  styleUrls: ['./show-department.component.scss']
})
export class ShowDepartmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()departmant!:Department
  @Output()closedepartmant = new EventEmitter();
  bobo:boolean = false;
  close(){
    this.closedepartmant.emit();
  }
}
