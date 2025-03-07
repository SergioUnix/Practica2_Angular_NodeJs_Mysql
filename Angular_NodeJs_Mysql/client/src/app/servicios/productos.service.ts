import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';     /// modulo encargado de hacer las peticiones http
import {Producto} from '../modelos/Producto';          //importo tipo interfaz producto
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
    // Creo una variable con mi dirección
    API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  
  //metodo para pedir productos
 getProductos(){
  return this.http.get(`${this.API_URI}/productos`);
   }
  //metodo para pedir productos
  getProductosVendidos(){
    return this.http.get(`${this.API_URI}/productos/carrito`);
     }

 //metodo para obtener un producto
 getProducto(id: string){
   return this.http.get(`${this.API_URI}/productos/${id}`);
 
 }
 //metodo para guardar un producto
 saveProducto(producto:Producto){
 return this.http.post(`${this.API_URI}/productos`, producto);
 
 }
 //metodo de borrar
 deleteProducto(id: string){
   return this.http.delete(`${this.API_URI}/productos/${id}`);
 }
 //metodo de actualizar producto
 updateProducto(id:string, updatedProducto:Producto):Observable<Producto> {
   return this.http.put(`${this.API_URI}/productos/${id}`, updatedProducto);
   
   }

  //metodo de actualizar producto
  updateProductoCarrito(id:string) {
    return this.http.put(`${this.API_URI}/productos/carrito/${id}`,[]);
        }
  //metodo de actualizar producto
  updateProductoCarritoDis(id:string) {
    return this.http.put(`${this.API_URI}/productos/carritoDis/${id}`,[]);
        }
  //metodo de actualizar producto
  updateProductoCarritoVen(id:string) {
    return this.http.put(`${this.API_URI}/productos/carritoVen/${id}`,[]);
        }        

         //metodo para obtener productos
 getBuscar(id: string){
  return this.http.get(`${this.API_URI}/productos/buscar/${id}`);
}
 //metodo para pedir productos
  getReporte1(){
  return this.http.get(`${this.API_URI}/productos/reporte1/reporte`);
  }
  //metodo para pedir productos
 getReporte2(){
  return this.http.get(`${this.API_URI}/productos/reporte2/reporte`);
 }

}
