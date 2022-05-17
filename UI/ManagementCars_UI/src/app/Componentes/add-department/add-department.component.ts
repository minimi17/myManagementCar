import { DepartmentService } from './../../services/department.service';
import { NgForm } from '@angular/forms';
import { AddDepartment } from './../../Models/DTO/addDepartment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit {

  constructor(private departmentService:DepartmentService) { }

  ngOnInit(): void {
  }

  department:AddDepartment={
    description:'',
    name:''
  }

  roles:string[]=[
    'General',
    'Manager',
  ]

  add(form:NgForm){

    this.departmentService.AddDepartment(this.department).subscribe(
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
