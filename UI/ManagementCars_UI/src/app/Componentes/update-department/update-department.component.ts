import { NgForm } from '@angular/forms';
import { Department } from './../../Models/Entity/Department';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from './../../services/department.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.scss']
})
export class UpdateDepartmentComponent implements OnInit {

  constructor(
    private departmentService: DepartmentService,
    private myRoute: ActivatedRoute
  ) {}

  department!: Department;
  name!: string;

  ngOnInit(): void {
    this.myRoute.paramMap.subscribe((myPar) => {
      this.name = myPar.get('name')!;
    });

    this.departmentService.GetDepartment(this.name).subscribe(
      (data) => {
        this.department = data;
      },
      (err) => {
        alert(err.error);
      }
    );
  }

  update(form: NgForm) {
    this.departmentService.updateDepartment(this.department).subscribe(
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
