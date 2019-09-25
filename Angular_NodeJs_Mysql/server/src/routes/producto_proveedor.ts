import {Router} from 'express';
import {producto_proveedorController} from '../controllers/producto_proveedorController';
 
class Producto_proveedorRoutes{

    public router: Router= Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', producto_proveedorController.list);
        this.router.get('/:id', producto_proveedorController.getOne);
        this.router.post('/', producto_proveedorController.create);
        this.router.put('/:id', producto_proveedorController.update);
        this.router.delete('/:id', producto_proveedorController.delete);
        
    }
}

const producto_proveedorRoutes =new Producto_proveedorRoutes();
export default producto_proveedorRoutes.router; 