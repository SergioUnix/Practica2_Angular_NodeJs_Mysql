"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const facturasController_1 = require("../controllers/facturasController");
class FacturasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', facturasController_1.facturasController.list); ///obtiene todas las facturas
        this.router.get('/soloUser/:id', facturasController_1.facturasController.listUser); ///obtiene todas las facturas pero de un usuario
        this.router.post('/', facturasController_1.facturasController.create); //creo una factura
        this.router.get('/ultima/:id', facturasController_1.facturasController.ultimoRegistro); /// devuelve el ultimo registro de factura creada con el codigo de cod_usuario_fk
        this.router.post('/detalle', facturasController_1.facturasController.createDetalle);
    }
}
const facturasRoutes = new FacturasRoutes();
exports.default = facturasRoutes.router;
