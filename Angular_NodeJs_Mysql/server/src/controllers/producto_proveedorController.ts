import {Request, Response} from 'express';
const pool = require ('../database');

class Producto_proveedorController{
    // Obtengo una lista de los productos registrados
    public async list(req: Request, res: Response ){ 
    const producto_proveedor =await pool.query('SELECT * FROM producto');
    res.json(producto_proveedor);  
    }
    //Obtengo solo un producto
    public async getOne(req: Request, res: Response ): Promise<any>{    
    const {id} =req.params;
    const producto_proveedor = await pool.query('SELECT * FROM producto WHERE cod_producto =?', [id]);     
    if(producto_proveedor.length>0){
        return res.json(producto_proveedor[0]);
    }else{
    res.status(404).json({text:'El producto no existe '});}   //minuto 1:27
    }
    // Creo un producto    
    public async create(req: Request, res: Response ){
    //console.log(req.body);
    await pool.query('INSERT INTO producto set ?', [req.body]);
    res.json({message: 'Producto Guardado'});    
    }
    //
    public delete(req: Request, res: Response ){
        const {id}= req.params;
        pool.query('DELETE FROM producto WHERE cod_producto =?',[id]);
        res.json({messaage: 'El producto fue eliminado'});
        
    }

    public async update(req: Request, res: Response ){
        const {id}=req.params;
        await pool.query('UPDATE producto set ? WHERE  cod_producto=?', [req.body,id]);
        res.json({massage: 'El producto se ha sido actualizado'});
    }
    
    




}

export const producto_proveedorController = new Producto_proveedorController();