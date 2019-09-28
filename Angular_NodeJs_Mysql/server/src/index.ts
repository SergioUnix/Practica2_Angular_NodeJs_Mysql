import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import productosRoutes from './routes/productosRoutes';
import proveedoresRoutes from './routes/proveedoresRoutes';
import usuariosRoutes from './routes/usuariosRoutes';
import producto_proveedorRoutes from './routes/producto_proveedor';
import facturasRoutes from './routes/factura';
import asociarRoutes from './routes/Asociar';
class Server {

    public app: Application ;
    constructor(){
        this.app=express();
        this.config();
        this.routes();
    }


    config(): void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json()); ///acepta desde angular archivos en formato json
        this.app.use(express.urlencoded({extended: false}));
        


    }

    routes(): void{
        this.app.use('/',indexRoutes);
        this.app.use('/api/productos',productosRoutes);
        this.app.use('/api/proveedores',proveedoresRoutes);
        this.app.use('/api/usuarios',usuariosRoutes);
        this.app.use('/api/producto_proveedor', producto_proveedorRoutes);
        this.app.use('/api/facturas', facturasRoutes);
        this.app.use('/api/facturas', asociarRoutes);
        this.app.use('/api/asociar', asociarRoutes);
    }

    
    start(): void {
        this.app.listen(this.app.get('port'), ()=>{
            console.log('Server on port', this.app.get('port'));

        });


    }


}

const server = new Server();
server.start();