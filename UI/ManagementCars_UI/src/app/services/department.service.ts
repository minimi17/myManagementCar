
import { Department } from './../Models/Entity/Department';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { connection } from '../Helper/connection';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }
  apiDepartment = connection.apiBaseUrl+'Department'

  GetDepartments():Observable<Department[]>{
    return this.http.get<Department[]>(this.apiDepartment);
  }

  GetDepartment(name:string):Observable<Department>{
    return this.http.get<Department>(this.apiDepartment+'/'+name)
  }

  DeleteDepartmentAtName(name:string):Observable<Department>{
    return this.http.delete<Department>(this.apiDepartment+'/'+name);
  }
  AddDepartment(newDepartment : Department):Observable<Department>{
    return this.http.post<Department>(this.apiDepartment, newDepartment);
  }
  updateDepartment(AddDepartment:Department):Observable<Department>{
    return this.http.put<Department>(this.apiDepartment, AddDepartment );
  }

}
