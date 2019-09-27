"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productosController_1 = require("../controllers/productosController");
class ProductosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', productosController_1.productosController.list); /// obtendo todos los productos disponibles
        this.router.get('/carrito', productosController_1.productosController.listCarrito); // obtengo todos los productos en carrito
        this.router.get('/:id', productosController_1.productosController.getOne);
        this.router.post('/', productosController_1.productosController.create);
        this.router.put('/:id', productosController_1.productosController.update);
        this.router.put('/carrito/:id', productosController_1.productosController.updateCarrito); //acturaliza estado de producto
        this.router.put('/carritoDis/:id', productosController_1.productosController.updateDisponible); //acturaliza estado de producto
        this.router.put('/carritoVen/:id', productosController_1.productosController.updateVendido); //acturaliza estado de producto
        this.router.delete('/:id', productosController_1.productosController.delete);
    }
}
const productosRoutes = new ProductosRoutes();
exports.default = productosRoutes.router;
