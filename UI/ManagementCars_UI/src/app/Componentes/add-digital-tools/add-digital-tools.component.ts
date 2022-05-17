import { DigitalToolsService } from './../../services/digital-tools.service';
import { AddDigitalTools } from './../../Models/DTO/addDigitalTools';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-digital-tools',
  templateUrl: './add-digital-tools.component.html',
  styleUrls: ['./add-digital-tools.component.scss']
})
export class AddDigitalToolsComponent implements OnInit {

  constructor(private digitalToolsService :DigitalToolsService) { }

  ngOnInit(): void {
  }

  addDigitalTools:AddDigitalTools={
    name:'',
    price:0
  }

  add(form:NgForm){

    this.digitalToolsService.addDigitalTools(this.addDigitalTools).subscribe(
      data=>{
        alert('Add successful !')
      },
      (err)=>{
        alert(err.error);
      }
    )

  }
}
