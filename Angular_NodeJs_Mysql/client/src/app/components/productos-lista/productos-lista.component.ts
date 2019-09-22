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
  
  @HostBinding('class') classes='row';  //necesario para desplegar un juego a la par de otro 
  productos: any=[];
 

  constructor(private productosService: ProductosService,private router: Router,private activatedRoute: ActivatedRoute,private usuariosService:UsuariosService) { }

  ngOnInit() { 
    const sesion =this.usuariosService.getSesion();
    console.log(sesion);
    this.getProductos();
   
    

    
  }
   /// Mostrar la lista de juegos

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
console.log(id);
this.productosService.deleteProducto(id).subscribe(  /// 
    
  res => {
    
    //this.router.navigate(['/games']);
    this.getProductos();     //pido el meodo de pintar los juegos para que se vea el cambio a la hora de eliminar uno y desaparezca
    console.log(res);    ///

  },
  err => console.error(err)
);
   }
 




}
