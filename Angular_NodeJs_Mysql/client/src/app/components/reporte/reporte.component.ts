import { Component, OnInit, HostBinding } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';
import { FacturasService } from 'src/app/servicios/facturas.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  reporte1: any=[];
  reporte2: any=[];
  @HostBinding('class') classes='row'; 

  constructor(private facturasService: FacturasService,private productosService: ProductosService,private router: Router,private activatedRoute: ActivatedRoute,private usuariosService:UsuariosService) { }

  ngOnInit() {

    if(this.usuariosService.getSesionNombre()==''){
      console.log("No Logeado --productos-lista");
      this.router.navigate(['/login']);
    }
 





    this.getReporte1();
    this.getReporte2();

  }


  getReporte1(){
    this.productosService.getReporte1().subscribe(  /// 
    res => {
      this.reporte1= res;    ///aca almaceno la respuesta que me devuelve, y luego utilizarlo en la lista
    },
      err => console.error(err)
    );
  }

  getReporte2(){
    this.productosService.getReporte2().subscribe(  /// 
    res => {
      this.reporte2= res;    ///aca almaceno la respuesta que me devuelve, y luego utilizarlo en la lista
    },
      err => console.error(err)
    );
  }








}
