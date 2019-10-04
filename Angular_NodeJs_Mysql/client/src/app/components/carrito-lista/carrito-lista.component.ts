import { Component, OnInit, HostBinding } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Detalle} from 'src/app/modelos/Detalle'; 
import { FacturaGuardada } from 'src/app/modelos/FacturaGuardada'; 
import {UsuariosService} from '../../servicios/usuarios.service';
import {FacturasService} from '../../servicios/facturas.service'

@Component({
  selector: 'app-carrito-lista',
  templateUrl: './carrito-lista.component.html',
  styleUrls: ['./carrito-lista.component.css']
})
export class CarritoListaComponent implements OnInit {
  detalle: Detalle={
    cod_factura_fk:  0,
    cod_producto_fk: 0,
  };
  facturaguardada: FacturaGuardada={
    cod_factura: 0,
    nit: 0,
    fecha: '',
    nombre: '',
    cod_usuario_fk: 0, 
  };


  public admin_funcion = false;
  public asistente_funcion = false;
  public cliente_funcion = false;
  public usuario_activo='';
  
  @HostBinding('class') classes='row';  //necesario para desplegar un juego a la par de otro 
  productos: any=[];

  usuario: any=[];

  ultimafac: any[];

 
  constructor(private facturasService: FacturasService,private productosService: ProductosService,private router: Router,private activatedRoute: ActivatedRoute,private usuariosService:UsuariosService) { }

  ngOnInit() {

    if(this.usuariosService.getSesionNombre()==''){
      console.log("No Logeado --desde carrito lista");
      this.router.navigate(['/login']);
    }
 
    ///obtiene todos los productos
    this.getProductosCarrito();
    ///Obtiene datos del logueo
    this.onCheckUser();
  }




  onCheckUser(): void {
  if (this.usuariosService.getSesionTipo()=='1') {
    this.admin_funcion = true; 
    this.asistente_funcion=true;
    this.cliente_funcion=true;   
  }else if(this.usuariosService.getSesionTipo()=='2') {
    this.asistente_funcion = true;
    this.cliente_funcion=true;   
  }else if(this.usuariosService.getSesionTipo()=='3') {
    this.cliente_funcion = true;
    this.asistente_funcion=true;
  }
  }

    /// Mostrar la lista de productos

  getProductosCarrito(){
    this.productosService.getProductosVendidos().subscribe(  /// 
    res => {
      this.productos = res;    ///aca almaceno la respuesta que me devuelve, y luego utilizarlo en la lista
    },
      err => console.error(err)
    );
  }

     /// metodo para cambiar estado de carrito de Carrito a Disponible
     quitarACarrito(id: string){
      this.productosService.updateProductoCarritoDis(id).subscribe(  /// 
      res => {    
      this.getProductosCarrito();     //pido el meodo de pintar los juegos para que se vea el cambio a la hora de eliminar uno y desaparezca
     },
      err => console.error(err)
      );
     }


      /// metodo para cambiar estado de carrito de Carrito a vendido
      Vendido(id: string){
        this.productosService.updateProductoCarritoVen(id).subscribe(  /// 
        res => {    
        this.getProductosCarrito();     //pido el meodo de pintar los juegos para que se vea el cambio a la hora de eliminar uno y desaparezca
       },
        err => console.error(err)
        );
       }

 ////Quita todo del Carrito
quitarTodoCarrito(){
for (let i of this.productos) {
  console.log(i.cod_producto); 
  this.quitarACarrito(i.cod_producto.toString());
  this.getProductosCarrito();
  this.router.navigate(['/login']);
}}


//crear Factura
crearfactura(){

delete this.facturaguardada.cod_factura;
delete this.facturaguardada.fecha;
delete this.facturaguardada.nombre;
let cod=this.usuariosService.getSesionCod();
this.facturaguardada.cod_usuario_fk=parseInt(cod);
  this.facturasService.saveFactura(this.facturaguardada).subscribe(
    res=> {console.log('Factura creada');
    this.compra();
    
  
  },
    err => console.error(err)
  );
  
}



  /// Facturar
compra(){

  let respuesta;
  let cod=this.usuariosService.getSesionCod();
this.facturasService.getUltimaFactura(cod.toString()).subscribe(
  res=> {console.log('ultimo registro');
          respuesta =res; // recibe {cod_factura= 0}

          for (let i of this.productos) {
            console.log(this.detalle);
            this.detalle.cod_factura_fk=parseInt(respuesta.cod_factura);

            this.detalle.cod_producto_fk= parseInt(i.cod_producto);
            console.log(this.detalle);

            console.log(i.cod_producto); 
            this.guardarDetalle(this.detalle);
          }
 this.pasarAvendido();         
 this.getProductosCarrito();

},
  err => console.error(err)
);




}

guardarDetalle(detalle:Detalle){
  this.facturasService.saveDetalle(detalle).subscribe(  /// 
  res => { console.log('Guardo detalle')
 },
  err => console.error(err)
  );
 }


 pasarAvendido(){
  for (let i of this.productos) {
    //console.log(i.cod_producto); 
    this.Vendido(i.cod_producto.toString());
    this.getProductosCarrito();
  }}
  


}





