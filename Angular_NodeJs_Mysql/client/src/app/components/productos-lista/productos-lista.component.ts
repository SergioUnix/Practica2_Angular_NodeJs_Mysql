import {Component, OnInit, HostBinding } from '@angular/core';
import {ProductosService} from '../../servicios/productos.service'; ///importo los servicios aca
import {Route, Router, ActivatedRoute} from '@angular/router';
import {UsuariosService} from '../../servicios/usuarios.service';
import { Usuario } from 'src/app/modelos/Usuario';
@Component({
  selector: 'app-productos-lista',
  templateUrl: './productos-lista.component.html',
  styleUrls: ['./productos-lista.component.css']
})
export class ProductosListaComponent implements OnInit {

  public admin_funcion = false;
  public asistente_funcion = false;
  public cliente_funcion = false;
  public usuario_activo='';
  
  @HostBinding('class') classes='row';  //necesario para desplegar un juego a la par de otro 
  productos: any=[];
 

  constructor(private productosService: ProductosService,private router: Router,private activatedRoute: ActivatedRoute,private usuariosService:UsuariosService) { }

  ngOnInit() { 
    //Obtener Sesion
    let  cod= this.usuariosService.getSesionCod()

    if(this.usuariosService.getSesionNombre()==''){
      console.log("No Logeado --productos-lista");
      this.router.navigate(['/login']);
    }
 
    
    
    
    
    
      ///obtiene todos los productos
        this.getProductos();
      ///Obtiene datos del logueo
        this.onCheckUser();
   
    

    
  }

 ////dar privilegios a a las funciones
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


   /// Mostrar la lista de productos

   getProductos(){
    this.productosService.getProductos().subscribe(  /// 
      res => {
        this.productos = res;    ///aca almaceno la respuesta que me devuelve, y luego utilizarlo en la lista
       },
      err => console.error(err)
    );
  }



  ///Metodo para eliminar un juego atravez del id
  deleteProducto(id: string){
  this.productosService.deleteProducto(id).subscribe(  /// 
  res => {    
    this.getProductos();     //pido el meodo de pintar los juegos para que se vea el cambio a la hora de eliminar uno y desaparezca
   },
  err => console.error(err)
    );
   }

     /// metodo para cambiar estado de carrito de Disponible a Carrito
  agregarACarrito(id: string){
   this.productosService.updateProductoCarrito(id).subscribe(  /// 
   res => {    
   this.getProductos();     //pido el meodo de pintar los juegos para que se vea el cambio a la hora de eliminar uno y desaparezca
  },
   err => console.error(err)
   );
  }
     
   
logOut(){
localStorage.removeItem("nombre");
localStorage.removeItem("cod_usuario");
localStorage.removeItem("usuario");
this.router.navigate(['/login']);
}



}
