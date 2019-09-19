import {Request, Response} from 'express';
const pool = require ('../database');

class GamesController{

    public async list(req: Request, res: Response ){ 
    const games =await pool.query('SELECT * FROM games');    
    res.json(games);  
    }
    public async getOne(req: Request, res: Response ): Promise<any>{    
    const {id} =req.params;
    const games = await pool.query('SELECT * FROM ng_games_db.games WHERE ID =?', [id]);     
    if(games.length>0){
        return res.json(games[0]);
    }else{
    res.status(404).json({text:'el juego no existe '});}   //minuto 1:27
    }
        
    public async create(req: Request, res: Response ){
    //console.log(req.body);
    await pool.query('INSERT INTO games set ?', [req.body]);
    res.json({message: 'Juego Guardado'});    
    }

    public delete(req: Request, res: Response ){
        const {id}= req.params;
        pool.query('DELETE FROM ng_games_db.games WHERE ID =?',[id]);
        res.json({messaage: 'El juego fue eliminado'});
        
    }

    public async update(req: Request, res: Response ){
        const {id}=req.params;
        await pool.query('UPDATE ng_games_db.games set ? WHERE  id=?', [req.body,id]);
        res.json({massage: 'el juego ha sido actualizado'});
    }
    
    




}

export const gamesController = new GamesController();