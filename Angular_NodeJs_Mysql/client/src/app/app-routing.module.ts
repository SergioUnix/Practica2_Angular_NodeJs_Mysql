import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductoFormComponent} from './components/producto-form/producto-form.component';
import {ProductosListaComponent} from './components/productos-lista/productos-lista.component'; //importamos componente
import {ProveedorFormComponent} from './components/proveedor-form/proveedor-form.component'; //importamos componente
import {LoginComponent} from './components/login/login.component'; //importamos componente


const routes: Routes = [

  
{
  path: '',
  redirectTo: '/productos',
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
      }

        
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
