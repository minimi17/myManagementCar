import { Car } from './../../Models/Entity/Car';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-show-car',
  templateUrl: './show-car.component.html',
  styleUrls: ['./show-car.component.scss']
})
export class ShowCarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()car!:Car
  @Output()closeCar = new EventEmitter();

  close(){

    this.closeCar.emit();
  }
}
