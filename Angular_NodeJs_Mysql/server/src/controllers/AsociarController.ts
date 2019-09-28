import {Request, Response} from 'express';
const pool = require ('../database');

class AsociarController{
    // Obtengo una lista de las asociaciones registradas
    public async list(req: Request, res: Response ){ 
    const facturas =await pool.query('select cod_producto_proveedor, producto.nombre as nomProducto, proveedor.nombre as nomProveedor FROM producto INNER JOIN producto_proveedor ON cod_producto = cod_producto_fk INNer JOIN proveedor ON cod_proveedor = cod_proveedor_fk');
    res.json(facturas);  
    }
   
    // Creo una asociacion
    public async create(req: Request, res: Response ){
    //console.log(req.body);
    await pool.query('INSERT INTO practica2.producto_proveedor set ?', [req.body]);
    res.json({message: 'Factura Asociacion'});    
    }

    // eliminar todos las asociaciones a un producto
    public delete(req: Request, res: Response ){
        const {id}= req.params;
        pool.query('DELETE FROM producto_proveedor where cod_producto_fk=?',[id]);
        res.json({messaage: 'Asociacion a producto eliminado'});
        
    }
 

 

    
    




}

export const asociarController = new AsociarController();