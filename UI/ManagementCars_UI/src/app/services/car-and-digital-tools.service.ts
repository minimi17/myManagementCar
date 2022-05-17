import { AddCarWithDigitalTools } from './../Models/DTO/addCarWithDigitalTools';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { connection } from '../Helper/connection';
import { CarAndDigitalTools } from '../Models/Entity/CarAndDigitalTools';

@Injectable({
  providedIn: 'root'
})
export class CarAndDigitalToolsService {

  constructor(private http:HttpClient) { }
  apiCarAndDigitalTools = connection.apiBaseUrl+'CarAndDigitalTools'

  GetCarAndDigitalTools():Observable<CarAndDigitalTools[]>{
    return this.http.get<CarAndDigitalTools[]>(this.apiCarAndDigitalTools);
  }
  GetCarAndDigitalToolsAtMe(number:string,id:number):Observable<CarAndDigitalTools>{
    return this.http.get<CarAndDigitalTools>(this.apiCarAndDigitalTools+'/'+number+'/'+id);
  }

  GetCarAndDigitalToolsAtNum(number:string):Observable<CarAndDigitalTools>{
    return this.http.get<CarAndDigitalTools>(this.apiCarAndDigitalTools+'/DigitalToolsToCar/'+number);
  }
  DeleteCarAndDigitalTools(number:string,id:number):Observable<CarAndDigitalTools>{
    return this.http.delete<CarAndDigitalTools>(this.apiCarAndDigitalTools+'/'+number+'/'+id);
  }
  AddCarAndDigitalTools( addCarWithDigitalTools : AddCarWithDigitalTools):Observable<CarAndDigitalTools>{
  return this.http.post<CarAndDigitalTools>(this.apiCarAndDigitalTools, addCarWithDigitalTools);
  }

  setCarPrice(number:string):Observable<string>{
    return this.http.get<string>(this.apiCarAndDigitalTools+'/DigitalToolsToCar/'+number);

  }



}
