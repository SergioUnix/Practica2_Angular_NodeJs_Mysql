import {Request, Response} from 'express';
const pool = require ('../database');

class UsuariosController{
    // Obtengo una lista de los productos registrados
    public async list(req: Request, res: Response ){ 
    const usuarios=await pool.query('SELECT * FROM usuario');
    res.json(usuarios);  
    }
    //Obtengo solo un producto
    public async getOne(req: Request, res: Response ): Promise<any>{    
    const {id} =req.params;
    const usuarios = await pool.query('SELECT * FROM usuario WHERE cod_usuario =?', [id]);     
    if(usuarios.length>0){
        return res.json(usuarios[0]);
    }else{
    res.status(404).json({text:'El usuario no existe '});}   //minuto 1:27
    }
    // Creo un producto    
    public async create(req: Request, res: Response ){
    //console.log(req.body);
    await pool.query('INSERT INTO usuario set ?', [req.body]);
    res.json({message: 'Usuario Guardado'});    
    }
    //
    public delete(req: Request, res: Response ){
        const {id}= req.params;
        pool.query('DELETE FROM usuario WHERE cod_usuario =?',[id]);
        res.json({messaage: 'El usuario fue eliminado'});
        
    }

    public async update(req: Request, res: Response ){
        const {id}=req.params;
        await pool.query('UPDATE usuario set ? WHERE  cod_usuario=?', [req.body,id]);
        res.json({massage: 'El usuario se ha sido actualizado'});
    }
    
    public async login(req: Request, res: Response ){
        //const {id}=req.params;
        const {nickname}=req.params;
        const {pass}=req.params;
        const usuarios = await pool.query("Select * from usuario where nickname=? and password=?", [nickname,pass]);
        if(usuarios.length>0){
            return res.json(usuarios[0]);
        }else{
        res.status(404).json({text:'El usuario no encontrado'});} 

        
    }
    
    




}

export const usuariosController = new UsuariosController();
