import { Client } from './../../Models/Entity/Client';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show-client',
  templateUrl: './show-client.component.html',
  styleUrls: ['./show-client.component.scss']
})
export class ShowClientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  @Input()client!:Client
  @Output()closeClient = new EventEmitter();
  bobo:boolean = false;
  close(){

    this.closeClient.emit();
  }

}
