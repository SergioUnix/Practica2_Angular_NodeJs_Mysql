import {Router} from 'express';
import {productosController} from '../controllers/productosController';
 class ProductosRoutes{

    public router: Router= Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', productosController.list); /// obtendo todos los productos disponibles
        this.router.get('/carrito', productosController.listCarrito); // obtengo todos los productos en carrito
        this.router.get('/:id', productosController.getOne);
        this.router.post('/', productosController.create);
        this.router.put('/:id', productosController.update);
        this.router.put('/carrito/:id', productosController.updateCarrito); //acturaliza estado de producto
        this.router.put('/carritoDis/:id', productosController.updateDisponible); //acturaliza estado de producto
        this.router.put('/carritoVen/:id', productosController.updateVendido); //acturaliza estado de producto
        this.router.delete('/:id', productosController.delete);
        this.router.get('/reporte1/reporte/', productosController.reporte1); ///reporte 1
        this.router.get('/reporte2/reporte/', productosController.reporte2); ///reporte 2 
        this.router.get('/buscar/:id', productosController.getBuscar);  ///Buscar producto envio nombre para consultarlo 
    }
}

const productosRoutes =new ProductosRoutes();
export default productosRoutes.router; 