import {Request, Response} from 'express';
const pool = require ('../database');

class ProveedoresController{
    // Obtengo una lista de los productos registrados
    public async list(req: Request, res: Response ){ 
    const proveedores =await pool.query('SELECT * FROM proveedor');
    res.json(proveedores);  
    }
    //Obtengo solo un producto
    public async getOne(req: Request, res: Response ): Promise<any>{    
    const {id} =req.params;
    const proveedores = await pool.query('SELECT * FROM proveedor WHERE cod_proveedor =?', [id]);     
    if(proveedores.length>0){
        return res.json(proveedores[0]);
    }else{
    res.status(404).json({text:'El proveedor no existe '});}   //
    }
    // Creo un producto    
    public async create(req: Request, res: Response ){
    //console.log(req.body);
    await pool.query('INSERT INTO proveedor set ?', [req.body]);
    res.json({message: 'Proveedor Guardado'});    
    }
    //
    public delete(req: Request, res: Response ){
        const {id}= req.params;
        pool.query('DELETE FROM proveedor WHERE cod_proveedor =?',[id]);
        res.json({messaage: 'El proveedor fue eliminado'});
        
    }

    public async update(req: Request, res: Response ){
        const {id}=req.params;
        await pool.query('UPDATE proveedor set ? WHERE  cod_proveedor=?', [req.body,id]);
        res.json({massage: 'El proveedor se ha sido actualizado'});
    }
    
    




}

export const proveedoresController = new ProveedoresController();