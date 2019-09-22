import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';     /// modulo encargado de hacer las peticiones http
import {Proveedor} from '../modelos/Proveedor';          //importo tipo interfaz 
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
      // Creo una variable con mi dirección
      API_URI = 'http://localhost:3000/api';


  constructor(private http: HttpClient) {   }

  
  //metodo para pedir 
 getProveedores(){
  return this.http.get(`${this.API_URI}/proveedores`);
   }
 //metodo para obtener 
 getProveedor(id: string){
   return this.http.get(`${this.API_URI}/proveedores/${id}`);
 
 }
 //metodo para guardar 
 saveProveedor(proveedor:Proveedor){
 return this.http.post(`${this.API_URI}/proveedores`, proveedor);
 
 }
 //metodo de borrar
 deleteProveedor(id: string){
   return this.http.delete(`${this.API_URI}/proveedores/${id}`);
 }
 //metodo de actualizar 
 updateProveedor(id:string, updatedProveedor:Proveedor):Observable<any> {
   return this.http.put(`${this.API_URI}/proveedores/${id}`, updatedProveedor);
   
   }

}
