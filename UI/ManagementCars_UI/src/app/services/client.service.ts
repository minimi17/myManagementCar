import { AddCarToClient } from './../Models/DTO/addCarToClient';
import { AddClient } from './../Models/DTO/addClient';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { connection } from '../Helper/connection';
import { Client } from '../Models/Entity/Client';
import { Car } from '../Models/Entity/Car';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }
  apiClient = connection.apiBaseUrl+'Client'

  GetClients():Observable<Client[]>{
    return this.http.get<Client[]>(this.apiClient);
  }

  GetClient(id:string):Observable<Client>{
    return this.http.get<Client>(this.apiClient+'/'+id);
  }
  DeleteClient(id:string):Observable<Client>{
    return this.http.delete<Client>(this.apiClient+'/'+id);
  }
  AddClient(client : AddClient):Observable<Client>{
  return this.http.post<Client>(this.apiClient, client);
  }
  updateClient(idClientUpdate :string  , upClient : Client):Observable<Client>{
    return this.http.put<Client>(this.apiClient+'/'+idClientUpdate,upClient);
  }

  addCarClient(idClientUpdate:string,addCarToClient:AddCarToClient) : Observable<Client>{
    return this.http.put<Client>(this.apiClient+'/addCar/'+idClientUpdate,addCarToClient);
  }


}


