export interface Factura{
    
        nit?: number;
        cod_usuario_fk?: number;
 }
 export interface Detalle{
        cod_factura_fk?:  number;
        cod_producto_fk?: number;
      
    }
    