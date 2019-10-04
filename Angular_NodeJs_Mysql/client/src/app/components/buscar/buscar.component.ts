import { Component, OnInit, HostBinding } from '@angular/core';
import {Route, Router, ActivatedRoute} from '@angular/router';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { ProductosService } from 'src/app/servicios/productos.service';
import { AsociarService } from 'src/app/servicios/asociar.service';
@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  productos: any=[];

  public hay_productos='No hay productos';

  public admin_funcion = false;
  public asistente_funcion = false;
  public cliente_funcion = false;
  public usuario_activo='';
  
   
  @HostBinding('class') classes='row'; 

  constructor(private asociarService:AsociarService, private usuariosService: UsuariosService,private productosService: ProductosService, private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
       //sino esta logueado me redirecciona al login
       if(this.usuariosService.getSesionNombre()==''){
        console.log("No Logeado --productos-lista");
        this.router.navigate(['/login']);
      }
     
    const params =this.activatedRoute.snapshot.params;
  
  


    this.getProductos();

      ///Obtiene datos del logueo
      this.onCheckUser();
  
  



  }


  getProductos(){
    const params =this.activatedRoute.snapshot.params;
    console.log(params.id);
    this.productosService.getBuscar(params.id).subscribe(  /// 
      res => {
        //console.log(res);
        this.productos = res;    ///aca almaceno la respuesta que me devuelve, y luego utilizarlo en la lista
        this.hay_productos='Productos Encontrados';  
      },
      err =>{ console.error(err); this.hay_productos='No hay productos'}
    );
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



/// quitar asociaciones antes de eliminar producto, elimina todas las asociaciones del producto
allasociacionProducto(id: string){
  this.asociarService.deleteAsociar(id).subscribe(  /// 
    res => {  
      this.deleteProducto(id);  
      console.log('eliminamos todas las asociaciones antes de eliminar');
      
     },
    err => console.error(err)
      );

}

 ///Metodo para eliminar un juego atravez del id
 deleteProducto(id: string){
  this.productosService.deleteProducto(id).subscribe(  /// 
  res => {    
    this.getProductos();     //pido el meodo de pintar los juegos para que se vea el cambio a la hora de eliminar uno y desaparezca
    location.reload(); 
  },
  err => console.error(err)
    );
   }






 
     /// metodo para cambiar estado de carrito de Disponible a Carrito
  agregarACarrito(id: string){
   this.productosService.updateProductoCarrito(id).subscribe(  /// 
   res => {    
   ///this.getProductos();  
   this.router.navigate(['/productos']);
  },
   err => console.error(err)
   );
  }
     


}
