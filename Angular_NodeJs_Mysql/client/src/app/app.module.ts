import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';//tambien se necesita importa HttpClientModule
import {FormsModule} from '@angular/forms';  //necesario importar 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { ProductosListaComponent } from './components/productos-lista/productos-lista.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { FacturaFormComponent } from './components/factura-form/factura-form.component';
import { ProductoProveedorComponent } from './components/producto-proveedor/producto-proveedor.component';
import {ProductosService} from './servicios/productos.service';
import { ProveedorFormComponent } from './components/proveedor-form/proveedor-form.component';  ///Aca importo los servicios
import {ProveedoresService} from './servicios/proveedores.service';
import { LoginComponent } from './components/login/login.component';
import { UsuarioRegistroComponent } from './components/usuario-registro/usuario-registro.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductoFormComponent,
    ProductosListaComponent,
    UsuarioFormComponent,
    FacturaFormComponent,
    ProductoProveedorComponent,
    ProveedorFormComponent,
    LoginComponent,
    UsuarioRegistroComponent
    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,         //escribo aca el httpClientModule
    FormsModule,             //necesario ponerlo para enlazar datos con el objeto creado
    AppRoutingModule
  ],
  providers: [
    ProductosService,  /// permite poder tener los metodos para pedir datos
    ProveedoresService  

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
