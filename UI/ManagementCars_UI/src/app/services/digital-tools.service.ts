import { AddDigitalTools } from './../Models/DTO/addDigitalTools';
import { digitalTools } from './../Models/Entity/DigitalTools';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { connection } from '../Helper/connection';

@Injectable({
  providedIn: 'root'
})
export class DigitalToolsService {

  constructor(private http:HttpClient) { }
  apiDigitalTools = connection.apiBaseUrl+'DigitalTools'

  GetDigitalTools():Observable<digitalTools[]>{
    return this.http.get<digitalTools[]>(this.apiDigitalTools);
  }

  GetDigitalTools2(id:number):Observable<digitalTools>{
    return this.http.get<digitalTools>(this.apiDigitalTools+'/'+id);
  }
  DeleteDigitalTools(id:number):Observable<digitalTools>{
    return this.http.delete<digitalTools>(this.apiDigitalTools+'/'+id);
  }

  addDigitalTools(addDigitalTools : AddDigitalTools):Observable<digitalTools>{
  return this.http.post<digitalTools>(this.apiDigitalTools, addDigitalTools);
  }
  PutDigitalTools(id:number, newDigitalTools : AddDigitalTools):Observable<digitalTools>{
    return this.http.put<digitalTools>(this.apiDigitalTools+'/'+id,newDigitalTools);
  }
}
// idDigitalUpdate
// int
// addDigitalTools
// newDigitalTools aqui me falta uno
