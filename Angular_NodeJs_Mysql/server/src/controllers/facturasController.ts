import {Request, Response} from 'express';
const pool = require ('../database');

class FacturasController{
    // Obtengo una lista de los facturas registradas
    public async list(req: Request, res: Response ){ 
    const facturas =await pool.query('select cod_factura,nit,fecha,usuario.nombre,cod_usuario FROM usuario INNER JOIN factura ON cod_usuario = cod_usuario_fk ');
    res.json(facturas);  
    }
   // Obtengo una lista de los facturas registradas
    public async listUser(req: Request, res: Response ){ 
    const {id} =req.params;
    const facturas =await pool.query('select cod_factura,nit,fecha,usuario.nombre,cod_usuario FROM usuario INNER JOIN factura ON cod_usuario = cod_usuario_fk where cod_usuario=? ', [id]);
    res.json(facturas);  
    }

    // Creo una factura 
    public async create(req: Request, res: Response ){
    //console.log(req.body);
    await pool.query('INSERT INTO factura set ?', [req.body]);
    res.json({message: 'Factura creada'});    
    }
    // Devuelvo el codigo de la ultima factura creada dado el codigo cod_usuario_fk
    public async ultimoRegistro(req: Request, res: Response ): Promise<any>{    
        const {id} =req.params;
        const ultimoregistro =await pool.query('select cod_factura from factura  where cod_usuario_fk=? order by cod_factura desc limit 1',[id]);
        res.json(ultimoregistro[0]);  
    }

    // Creo un detalle_factura
    public async createDetalle(req: Request, res: Response ){
        await pool.query('INSERT INTO detalle_factura set ?', [req.body]);
        res.json({message: 'detalle guardado'});    
    }


    
    




}

export const facturasController = new FacturasController();