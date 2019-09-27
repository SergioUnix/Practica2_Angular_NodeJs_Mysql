import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../../servicios/usuarios.service'; ///importo el servicio
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public admin_funcion = false;
  public asistente_funcion = false;
  public cliente_funcion = false;
  public usuario_activo='';



  constructor(private usuariosService:UsuariosService, private router: Router) { }

  ngOnInit() {
    
    




   this.onCheckUser();
   console.log(this.usuariosService.getSesionTipo());
   if(this.usuariosService.getSesionNombre()==''){
     console.log("No Logeado --navigator")
   }else{
     this.usuario_activo=this.usuariosService.getSesionNombre();
   }



  }

  onCheckUser(): void {
    if (this.usuariosService.getSesionTipo()=='1') {
      this.admin_funcion = true; 
      this.asistente_funcion=true;
      this.cliente_funcion=true;   
    } else if(this.usuariosService.getSesionTipo()=='2') {
      this.asistente_funcion = true;
      this.cliente_funcion=true;   
    }else if(this.usuariosService.getSesionTipo()=='3') {
      this.cliente_funcion = true;
      this.asistente_funcion=true;
  }
  }

  logOut(){
    this.usuariosService.OutSesion();
    location.reload();
    this.router.navigate(['/login']);
    }


}
