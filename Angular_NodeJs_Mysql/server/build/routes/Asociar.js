"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asociarController_1 = require("../controllers/asociarController");
class AsociarRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', asociarController_1.asociarController.list); ///obtiene todas las facturas
        this.router.post('/', asociarController_1.asociarController.create); //creo una asociacion
        this.router.delete('/:id', asociarController_1.asociarController.delete); // elimina todas las asociaciones de un producto con cod_producto
    }
}
const asociarRoutes = new AsociarRoutes();
exports.default = asociarRoutes.router;
