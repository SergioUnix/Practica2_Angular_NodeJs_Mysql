import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Asociacion} from '../modelos/Asociacion'; 

@Injectable({
  providedIn: 'root'
})
export class AsociarService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  //metodo para pedir 
  getAsociaciones(){
    return this.http.get(`${this.API_URI}/asociar`);
     }

   //metodo para guardar Factura
   saveAsociar(asociar:Asociacion){
    return this.http.post(`${this.API_URI}/asociar`, asociar);
    
    }

    //metodo de borrar
 deleteAsociar(id: string){
  return this.http.delete(`${this.API_URI}/asociar/${id}`);
}


  }