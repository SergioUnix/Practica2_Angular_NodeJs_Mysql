import { Component, OnInit, HostBinding } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';
import { Asociacion } from 'src/app/modelos/Asociacion'; 
import { AsociarService } from 'src/app/servicios/asociar.service';
@Component({
  selector: 'app-asociar',
  templateUrl: './asociar.component.html',
  styleUrls: ['./asociar.component.css']
})
export class AsociarComponent implements OnInit {
  productos: any=[];
  proveedores: any=[];
  @HostBinding('class') classes='row'; 

  asociacion:Asociacion={
    cod_producto_fk: 0,
    cod_proveedor_fk: 0,
  }

  constructor(private asociarService:AsociarService, private proveedoresService: ProveedoresService,private productosService: ProductosService,private usuariosService:UsuariosService,private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    if(this.usuariosService.getSesionNombre()==''){
      console.log("No Logeado --productos-lista");
      this.router.navigate(['/login']);
    }
    
         ///obtiene todos los productos
         this.getProductos();
         //obtiene todos los preveedores
         this.getProveedores();


  }


  /// Mostrar la lista de productos

  getProductos(){
    this.productosService.getProductos().subscribe(  /// 
      res => {
        this.productos = res;    ///aca almaceno la respuesta que me devuelve, y luego utilizarlo en la lista
       },
      err => console.error(err)
    );
  }


/// Mostrar la lista de proveedores

getProveedores(){
  this.proveedoresService.getProveedores().subscribe(  /// 
    res => {
      this.proveedores = res;    ///aca almaceno la respuesta que me devuelve, y luego utilizarlo en la lista
     },
    err => console.error(err)
  );
}


///Guardar Asociacion
guardar(){

  this.asociarService.saveAsociar(this.asociacion).subscribe(  /// 
    res => {
      console.log('Asociación guardada') 
      this.router.navigate(['/productos']); 
     },
    err => console.error(err)
  );


}








}
