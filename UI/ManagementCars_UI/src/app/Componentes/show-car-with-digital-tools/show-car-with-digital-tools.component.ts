import { CarAndDigitalTools } from './../../Models/Entity/CarAndDigitalTools';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show-car-with-digital-tools',
  templateUrl: './show-car-with-digital-tools.component.html',
  styleUrls: ['./show-car-with-digital-tools.component.scss']
})
export class ShowCarWithDigitalToolsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()carsWithDigitalTools!:CarAndDigitalTools[]
  @Output()closeCar = new EventEmitter();

  close(){

    this.closeCar.emit();
  }
}
