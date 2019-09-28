import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductoFormComponent} from './components/producto-form/producto-form.component';
import {ProductosListaComponent} from './components/productos-lista/productos-lista.component'; //importamos componente
import {ProveedorFormComponent} from './components/proveedor-form/proveedor-form.component'; //importamos componente
import {LoginComponent} from './components/login/login.component'; //importamos componente
import {UsuarioRegistroComponent} from './components/usuario-registro/usuario-registro.component'; //importamos componente
import { CarritoListaComponent } from './components/carrito-lista/carrito-lista.component';
import { FacturaFormComponent } from './components/factura-form/factura-form.component';
import { AsociarComponent } from './components/asociar/asociar.component';
import { AsociarListaComponent } from './components/asociar-lista/asociar-lista.component';
import { BuscarComponent } from './components/buscar/buscar.component';


const routes: Routes = [

  
{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
  
  },
  {
  path: 'productos',
  component: ProductosListaComponent
  
  },
  {
    path: 'productos/agregar',
    component: ProductoFormComponent
    
    },
    {
    path: 'productos/modificar/:id',
    component: ProductoFormComponent
    },
    {
    path: 'proveedores',
    component: ProveedorFormComponent
    },
    {
    path: 'login',
    component: LoginComponent
    },
    {
    path: 'login/:nickname/pass',
    component: LoginComponent
    },
    {
    path: 'registro',
    component: UsuarioRegistroComponent
    },
    {
    path: 'carrito',
    component: CarritoListaComponent
    },
    {
    path: 'facturas',
    component: FacturaFormComponent
    },
    {
    path: 'asociar',
    component: AsociarComponent
    },
    {
    path: 'asociar/Lista',
    component: AsociarListaComponent
    },
    {
    path: 'productos/buscar/:id',
    component: BuscarComponent
    }
  

        
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
