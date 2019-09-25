import { Component, OnInit, HostBinding } from '@angular/core';
import {UsuariosService} from '../../servicios/usuarios.service'; 
import {Route, Router, ActivatedRoute} from '@angular/router';
import { Usuario } from 'src/app/modelos/Usuario'; 
@Component({
  selector: 'app-usuario-registro',
  templateUrl: './usuario-registro.component.html',
  styleUrls: ['./usuario-registro.component.css']
})
export class UsuarioRegistroComponent implements OnInit {

  usuario: Usuario ={
    cod_usuario: 0,
    nombre: '',
    apellido: '',
    nickname: '',
    password: '',
    cod_tipo_fk: 0,
  };


  constructor(private usuariosService: UsuariosService, private router: Router) { }

  ngOnInit() {
    console.log('desde registro');
    console.log(this.usuario);



    ///si esta logueado redirecciona a productos
    if(this.usuariosService.getSesionNombre()==''){
      console.log("No Logeado --usuario-registro");
     
    }else{this.router.navigate(['/productos']);}
  }

  setUsuario(){    
    delete this.usuario.cod_usuario;
    this.usuariosService.saveUsuario(this.usuario)
    .subscribe(
      res=> { 
        this.router.navigate(['/login']);
      console.log('Usuario registrado');
      },
      err=> console.error(err)
  
    ) 
  
  
      }



  }


