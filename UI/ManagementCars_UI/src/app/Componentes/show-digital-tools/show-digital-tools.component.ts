import { digitalTools } from './../../Models/Entity/DigitalTools';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-show-digital-tools',
  templateUrl: './show-digital-tools.component.html',
  styleUrls: ['./show-digital-tools.component.scss']
})
export class ShowDigitalToolsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()digitalToolss!:digitalTools
  @Output()closedigitalTools = new EventEmitter();
  bobo:boolean = false;
  close(){

    this.closedigitalTools.emit();
  }

}
