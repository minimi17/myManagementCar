import { Car } from './../Models/Entity/Car';
import { AddCar } from './../Models/DTO/addCar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { connection } from '../Helper/connection';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http:HttpClient) { }
  apiCar = connection.apiBaseUrl+'Car'

  GetCars():Observable<Car[]>{
    return this.http.get<Car[]>(this.apiCar);
  }

  GetCar(number:string):Observable<Car>{
    return this.http.get<Car>(this.apiCar+'/'+number)
  }
  deleteCar(numberCar:string):Observable<Car>{
    return this.http.delete<Car>(this.apiCar+'/'+numberCar);
  }

  addCar(newCar:AddCar):Observable<Car>{
    return this.http.post<Car>(this.apiCar,newCar);
  }

  updateCar(numberCar:string, upCar:Car):Observable<Car>{
    return this.http.put<Car>(this.apiCar+'/'+numberCar,upCar)
  }




}
