import { Component, OnInit, HostBinding } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';
import { FacturasService } from 'src/app/servicios/facturas.service';
@Component({
  selector: 'app-factura-form',
  templateUrl: './factura-form.component.html',
  styleUrls: ['./factura-form.component.css']
})
export class FacturaFormComponent implements OnInit {
  public admin_funcion = false;
  public asistente_funcion = false;
  public cliente_funcion = false;
  public usuario_activo='';
  
  @HostBinding('class') classes='row';  //necesario para desplegar un juego a la par de otro 
  facturas: any=[];
 

  constructor(private facturasService: FacturasService,private productosService: ProductosService,private router: Router,private activatedRoute: ActivatedRoute,private usuariosService:UsuariosService) { }

  ngOnInit() {
    if(this.usuariosService.getSesionNombre()==''){
      console.log("No Logeado --productos-lista");
      this.router.navigate(['/login']);
    }


    this.getProductos();
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
  this.facturasService.getFacturas().subscribe(  /// 
    res => {
      this.facturas = res;    ///aca almaceno la respuesta que me devuelve, y luego utilizarlo en la lista
     },
    err => console.error(err)
  );
}





}
