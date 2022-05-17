import { UpdateDepartmentComponent } from './../update-department/update-department.component';
import { Router } from '@angular/router';
import { DepartmentService } from './../../services/department.service';
import { Department } from './../../Models/Entity/Department';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-departments',
  templateUrl: './main-departments.component.html',
  styleUrls: ['./main-departments.component.scss']
})
export class MainDepartmentsComponent implements OnInit {

  constructor(private departmentService:DepartmentService ,
    private router:Router) { }

  departments!:Department[];
  departmentChoose!:Department;
  choose:boolean = false;

  ngOnInit(): void {
    this.departmentService.GetDepartments()
    .subscribe(
        data=>{
          this.departments = data;
        }
    )
  }

  show(index:number){
    this.departmentChoose = this.departments[index];
    this.choose = true;
  }

  closeDepartmentMain(){
    this.choose = false;
  }

  displayImg:boolean = false;
  changeDisplay(change:boolean)
  {
    this.displayImg = change;
  }
  delete(index:number):void{
    this.departmentService.DeleteDepartmentAtName(this.departments[index].name)
    .subscribe(
      data=>
      {
        alert('Delete successful');
        this.router.navigate(['WorkerJob'])
      },
      (err)=>
      {
        alert(err.error)
      }
    )
  }

  update(index:number):void
  {
    this.router.navigate(['ManagerJob/updateDepartment/',this.departments[index].name])
  }

}
