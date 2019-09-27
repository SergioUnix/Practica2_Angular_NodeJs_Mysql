import { Component } from '@angular/core';
import {UsuariosService} from './servicios/usuarios.service'; ///importo el servicio



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'variable';
  public isLogged = true;

mostrarMenu:boolean =false;
constructor(private usuariosService:UsuariosService ){}


ngOnInit() { 
this.onCheckUser();


}

 onCheckUser(): void {
    if (this.usuariosService.getSesionNombre()=='') {
      this.isLogged = false;    
    } else {
      this.isLogged = true;   
    }
  }


}
