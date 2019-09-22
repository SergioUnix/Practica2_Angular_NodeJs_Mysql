import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';     /// modulo encargado de hacer las peticiones http
import {Usuario} from '../modelos/Usuario';          //importo tipo interfaz 
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  // Creo una variable con mi dirección
  API_URI = 'http://localhost:3000/api';
  sesion: Usuario ={
    cod_usuario: 0,
    nombre: '',
    apellido: '',
    nickname: '',
    password: '',
    cod_tipo_fk: 0,
  };

constructor(private http: HttpClient) {   }

setSesion(usuario:Usuario){
  this.sesion=usuario;

}
getSesion(){
  return this.sesion;
}


//metodo para pedir 
getUsuarios(){
return this.http.get(`${this.API_URI}/usuarios`);
}
//metodo para obtener 
getUsuario(id: string){
return this.http.get(`${this.API_URI}/usuarios/${id}`);
}
//metodo para logearse
loginUsuario(nickname: string, pass:string ){
  return this.http.get(`${this.API_URI}/usuarios/${nickname}/${pass}`);
  }

//metodo para guardar 
saveUsuario(usuario:Usuario){
return this.http.post(`${this.API_URI}/usuarios`, usuario);

}
//metodo de borrar
deleteUsuario(id: string){
return this.http.delete(`${this.API_URI}/usuarios/${id}`);
}
//metodo de actualizar 
updateUsuario(id:string, updatedUsuario:Usuario):Observable<any> {
return this.http.put(`${this.API_URI}/usuarios/${id}`, updatedUsuario);

}

}
