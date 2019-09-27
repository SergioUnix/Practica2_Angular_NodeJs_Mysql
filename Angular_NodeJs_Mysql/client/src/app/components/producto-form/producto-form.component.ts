import { Component, OnInit, HostBinding  } from '@angular/core';
import {Route, Router, ActivatedRoute} from '@angular/router'; /// sierve para cuando guarde me redireccione a la vista games
import { Producto } from 'src/app/modelos/Producto';   //importo el tipo de dato,
import {ProductosService} from '../../servicios/productos.service'; ///importo el servicio
import {UsuariosService} from '../../servicios/usuarios.service'; 


@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {

  @HostBinding('class') classes='row';  //necesario para desplegar un producto a la par de otro 

  producto: Producto ={
      cod_producto: 0,
      nombre: '',
      precio: 0,
      estado:'',
     
     
  };

  edit:boolean =false;  ///si este esta en falso significa que quiero guardar un elemento, si esta en verdadero quiero actualizar un producto
  accion: string='Agregar Producto';

  constructor (private usuariosService: UsuariosService,private productosService: ProductosService, private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    //sino esta logueado me redirecciona al login
    if(this.usuariosService.getSesionNombre()==''){
      console.log("No Logeado --productos-lista");
      this.router.navigate(['/login']);
    }
   



    const params =this.activatedRoute.snapshot.params;
    console.log(params);
    if(params.id){        //este params.id me detecta el numero
      this.productosService.getProducto(params.id)
        .subscribe(
           res =>{
             console.log(res)
            this.producto=res; ///cuando accedo ala ruta game/edit/id ,, aca hago el objeto con el id recibido y eso me muestra en visualizacion
            this.edit= true;
            this.accion='Actualizar Producto'
           },
           err => console.error(err)
        )
        }
    

    }
  /////guardo el juego
  saveNewProducto(){
  //console.log(this.producto);
  delete this.producto.cod_producto;
  this.productosService.saveProducto(this.producto)
    .subscribe(
      res=> {
        console.log(res);
        this.router.navigate(['/productos']);
      },
      err=> console.error(err)

    ) 
  }

  updateProducto(){
    const numero =this.producto.cod_producto;
    delete this.producto.cod_producto;
    console.log(this.producto);
    this.productosService.updateProducto(numero.toString(), this.producto)
      .subscribe(
      res =>{
        console.log(res);
        this.router.navigate(['/productos']);
      },
      err => console.error(err)

    )
  }


}
