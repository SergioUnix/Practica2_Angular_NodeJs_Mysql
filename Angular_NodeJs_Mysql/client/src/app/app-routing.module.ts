import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductoFormComponent} from './components/producto-form/producto-form.component';
import {ProductosListaComponent} from './components/productos-lista/productos-lista.component'; //importamos componente
import {ProveedorFormComponent} from './components/proveedor-form/proveedor-form.component'; //importamos componente
import {LoginComponent} from './components/login/login.component'; //importamos componente
import {UsuarioRegistroComponent} from './components/usuario-registro/usuario-registro.component'; //importamos componente
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';


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
    }

        
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
