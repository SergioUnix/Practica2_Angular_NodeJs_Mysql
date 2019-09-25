"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const producto_proveedorController_1 = require("../controllers/producto_proveedorController");
class Producto_proveedorRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', producto_proveedorController_1.producto_proveedorController.list);
        this.router.get('/:id', producto_proveedorController_1.producto_proveedorController.getOne);
        this.router.post('/', producto_proveedorController_1.producto_proveedorController.create);
        this.router.put('/:id', producto_proveedorController_1.producto_proveedorController.update);
        this.router.delete('/:id', producto_proveedorController_1.producto_proveedorController.delete);
    }
}
const producto_proveedorRoutes = new Producto_proveedorRoutes();
exports.default = producto_proveedorRoutes.router;
