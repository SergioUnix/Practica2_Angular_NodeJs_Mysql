import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Detalle} from '../modelos/Detalle'; 
import {FacturaGuardada} from '../modelos/FacturaGuardada'; 
@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  //metodo para pedir 
  getFacturas(){
    return this.http.get(`${this.API_URI}/facturas`);
     }
  //metodo para pedir facturas de un solo usaurio 
  getFacturasUsuario(id: string){
    return this.http.get(`${this.API_URI}/facturas/soloUser/${id}`);
     }
     
   //metodo para guardar Factura
   saveFactura(facturaGuardada:FacturaGuardada){
    return this.http.post(`${this.API_URI}/facturas`, facturaGuardada);
    
    }

   //metodo para obtener la ultima factura creada por el usuario utilizando el cod_usuario_fk
   getUltimaFactura(id: string){
     return this.http.get(`${this.API_URI}/facturas/ultima/${id}`);
   
   }


   //metodo para guardar Factura
   saveDetalle(detalle:Detalle){
   return this.http.post(`${this.API_URI}/facturas/detalle`, detalle);
   
   }













}
