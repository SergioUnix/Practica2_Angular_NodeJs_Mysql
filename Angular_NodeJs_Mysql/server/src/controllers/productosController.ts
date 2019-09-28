import {Request, Response} from 'express';
const pool = require ('../database');

class ProductosController{
    // Obtengo una lista de los productos disponibles
    public async list(req: Request, res: Response ){ 
    const productos =await pool.query("SELECT * FROM producto where estado='Disponible'");
    res.json(productos);  
    }

    // Obtengo una lista de los productos con el estado de Carrito
    public async listCarrito(req: Request, res: Response ){ 
        const productos =await pool.query("SELECT * FROM producto where estado='Carrito'");
        res.json(productos);  
        }

    //Obtengo solo un producto
    public async getOne(req: Request, res: Response ): Promise<any>{    
    const {id} =req.params;
    const productos = await pool.query('SELECT * FROM producto WHERE cod_producto =?', [id]);     
    if(productos.length>0){
        return res.json(productos[0]);
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
//// actualiza solo el estado de Disponible a Carrito
    public async updateCarrito(req: Request, res: Response ){
        const {id}=req.params;
        await pool.query("UPDATE producto set estado='Carrito' WHERE  cod_producto=?", [id]);
        res.json({massage: 'Cambio de estado de Disponible a Carrito'});
    }
//// actualiza solo el estado de carrito a Disponible
public async updateDisponible(req: Request, res: Response ){
    const {id}=req.params;
    await pool.query("UPDATE producto set estado='Disponible' WHERE  cod_producto=?", [id]);
    res.json({massage: 'Cambio de estado de Disponible a Carrito'});
}
//// actualiza solo el estado de carrito a Vendido
public async updateVendido(req: Request, res: Response ){
    const {id}=req.params;
    await pool.query("UPDATE producto set estado='Vendido' WHERE  cod_producto=?", [id]);
    res.json({massage: 'Cambio de estado de Disponible a Carrito'});
}

    /// Actualiza todo los datos del producto
    public async update(req: Request, res: Response ){
        const {id}=req.params;
        await pool.query('UPDATE producto set ? WHERE  cod_producto=?', [req.body,id]);
        res.json({massage: 'El producto se ha sido actualizado'});
    }
    
    
    //Obtengo solo un producto pero por medio de su nombre
    public async getBuscar(req: Request, res: Response ): Promise<any>{    
        const {id} =req.params;
        const productos = await pool.query("SELECT * FROM producto WHERE estado ='Disponible' and nombre =?", [id]);     
        if(productos.length>0){
            return res.json(productos);
        }else{
        res.status(404).json({text:'El producto no existe '});}   //minuto 1:27
        }


    // Obtengo una lista de los productos disponibles
    public async reporte1(req: Request, res: Response ){ 
        const productos =await pool.query("Select  producto.nombre, count(nombre)as vendidos FROM detalle_factura INNER JOIN producto ON detalle_factura.cod_producto_fk = producto.cod_producto group by nombre order by vendidos desc");
        res.json(productos);  
        }
            // Obtengo una lista de los productos disponibles
    public async reporte2(req: Request, res: Response ){ 
        const productos =await pool.query("Select  nombre, count(nombre)as compras FROM factura INNER JOIN usuario ON factura.cod_usuario_fk = usuario.cod_usuario group by nombre order by nombre asc");
        res.json(productos);  
        }


}

export const productosController = new ProductosController();