import { Component, OnInit, HostBinding } from '@angular/core';
import {UsuariosService} from '../../servicios/usuarios.service';
import {AsociarService} from '../../servicios/asociar.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-asociar-lista',
  templateUrl: './asociar-lista.component.html',
  styleUrls: ['./asociar-lista.component.css']
})
export class AsociarListaComponent implements OnInit {
  asociaciones: any=[];


  @HostBinding('class') classes='row'; 
  
  constructor(private asociarServicio:AsociarService, private usuariosService:UsuariosService,private router: Router) { }

  ngOnInit() {

    if(this.usuariosService.getSesionNombre()==''){
      console.log("No Logeado --productos-lista");
      this.router.navigate(['/login']);
    }

    this.getAsociaciones();


  }



  getAsociaciones(){
    this.asociarServicio.getAsociaciones().subscribe(  /// 
    res => {
      this.asociaciones = res;    //
    },
      err => console.error(err)
    );
  }








}
