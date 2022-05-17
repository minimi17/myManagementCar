import { AddWorker } from './../Models/DTO/addWorker';
import { Worker } from './../Models/Entity/Worker';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { connection } from '../Helper/connection';
import { workerLogIn } from '../Models/DTO/workerLogIn';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor(private http:HttpClient) { }
  apiWorker = connection.apiBaseUrl+'Worker'

  GetWorkers():Observable<Worker[]>{
    return this.http.get<Worker[]>(this.apiWorker);
  }

  GetWorker(id:string):Observable<Worker>{
    return this.http.get<Worker>(this.apiWorker+'/'+id);
  }
  DeleteWorker(id:string):Observable<Worker>{
    return this.http.delete<Worker>(this.apiWorker+'/'+id);
  }
  addWorker(newWorker : Worker):Observable<Worker>{
  return this.http.post<Worker>(this.apiWorker,newWorker );
  }
  PutWorker(idWorkerUpdate : string , addWorker : AddWorker ):Observable<Worker>{
    return this.http.put<Worker>(this.apiWorker+'/'+idWorkerUpdate, addWorker);
  }

  checkWorker(worker:workerLogIn):Observable<Worker>
  {
    return this.http.put<Worker>(this.apiWorker, worker);
  }



}
