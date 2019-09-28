import {Router} from 'express';
import {asociarController} from '../controllers/asociarController';

 class AsociarRoutes{

    public router: Router= Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', asociarController.list); ///obtiene todas las facturas
    
        this.router.post('/', asociarController.create);  //creo una asociacion
        this.router.delete('/:id', asociarController.delete); // elimina todas las asociaciones de un producto con cod_producto


    }
}

const asociarRoutes =new AsociarRoutes();
export default asociarRoutes.router; 