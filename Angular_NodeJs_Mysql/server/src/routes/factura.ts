import {Router} from 'express';
import {facturasController} from '../controllers/facturasController';
 class FacturasRoutes{

    public router: Router= Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', facturasController.list); ///obtiene todas las facturas
        this.router.get('/soloUser/:id', facturasController.listUser); ///obtiene todas las facturas pero de un usuario
        
        this.router.post('/', facturasController.create);  //creo una factura

        this.router.get('/ultima/:id', facturasController.ultimoRegistro); /// devuelve el ultimo registro de factura creada con el codigo de cod_usuario_fk
        
        this.router.post('/detalle', facturasController.createDetalle);

    }
}

const facturasRoutes =new FacturasRoutes();
export default facturasRoutes.router; 