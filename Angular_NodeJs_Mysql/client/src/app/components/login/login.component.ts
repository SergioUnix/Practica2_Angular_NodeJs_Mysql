import { Component, OnInit, HostBinding  } from '@angular/core';
import {Route, Router, ActivatedRoute} from '@angular/router'; /// sierve para cuando guarde me redireccione a la vista usuario
import { Usuario } from 'src/app/modelos/Usuario';   //importo el tipo de dato,
import {UsuariosService} from '../../servicios/usuarios.service'; ///importo el servicio



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  @HostBinding('class') classes='row';  //necesario para desplegar un producto a la par de otro 

  usuario: Usuario ={
    cod_usuario: 0,
    nombre: '',
    apellido: '',
    nickname: '',
    password: '',
    cod_tipo_fk: 0,
  };

  constructor(private usuariosService: UsuariosService, private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }

  getUsuario(){
    
  ///console.log(this.usuario);
    
  this.usuariosService.loginUsuario(this.usuario.nickname,this.usuario.password)
  .subscribe(
    res=> {
     /// console.log(res);
      this.usuario=res;
      this.usuariosService.setSesion(this.usuario);
      
      this.router.navigate(['/productos']);
    },
    err=> console.error(err)

  ) 


    }

}
