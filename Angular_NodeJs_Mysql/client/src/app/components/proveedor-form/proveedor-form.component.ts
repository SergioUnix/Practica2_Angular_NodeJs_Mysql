import { Component, OnInit, HostBinding } from '@angular/core';
import {ProveedoresService} from '../../servicios/proveedores.service'; ///importo los servicios aca
import {Route, Router, ActivatedRoute} from '@angular/router';
import { Proveedor } from 'src/app/modelos/Proveedor';   //importo el tipo de dato,
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-proveedor-form',
  templateUrl: './proveedor-form.component.html',
  styleUrls: ['./proveedor-form.component.css']
})
export class ProveedorFormComponent implements OnInit {

  @HostBinding('class') classes='row';  //necesario para desplegar un producto a la par de otro 

  proveedor: Proveedor ={
    cod_proveedor: 0,
    nombre: '',
    direccion: '',
    telefono: 0,
     
  };

  edit:boolean =false;  ///si este esta en falso significa que quiero guardar un elemento, si esta en verdadero quiero actualizar un producto


  constructor (private proveedoresService: ProveedoresService, private router: Router, private activatedRoute:ActivatedRoute,private usuariosService:UsuariosService) { }

  ngOnInit() {
    if(this.usuariosService.getSesionNombre()==''){
      console.log("No Logeado --productos-lista");
      this.router.navigate(['/login']);
    }

    }
  /////guardo 
  saveNewProveedor(){
  console.log(this.proveedor);
  delete this.proveedor.cod_proveedor;
  this.proveedoresService.saveProveedor(this.proveedor)
    .subscribe(
      res=> {
        console.log(res);
        this.router.navigate(['/productos']);
      },
      err=> console.error(err)

    ) 
  }



}
