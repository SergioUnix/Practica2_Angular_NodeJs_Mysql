"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const productosRoutes_1 = __importDefault(require("./routes/productosRoutes"));
const proveedoresRoutes_1 = __importDefault(require("./routes/proveedoresRoutes"));
const usuariosRoutes_1 = __importDefault(require("./routes/usuariosRoutes"));
const producto_proveedor_1 = __importDefault(require("./routes/producto_proveedor"));
const factura_1 = __importDefault(require("./routes/factura"));
const Asociar_1 = __importDefault(require("./routes/Asociar"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json()); ///acepta desde angular archivos en formato json
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/productos', productosRoutes_1.default);
        this.app.use('/api/proveedores', proveedoresRoutes_1.default);
        this.app.use('/api/usuarios', usuariosRoutes_1.default);
        this.app.use('/api/producto_proveedor', producto_proveedor_1.default);
        this.app.use('/api/facturas', factura_1.default);
        this.app.use('/api/facturas', Asociar_1.default);
        this.app.use('/api/asociar', Asociar_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
