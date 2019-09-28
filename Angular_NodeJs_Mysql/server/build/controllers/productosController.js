"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pool = require('../database');
class ProductosController {
    // Obtengo una lista de los productos disponibles
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const productos = yield pool.query("SELECT * FROM producto where estado='Disponible'");
            res.json(productos);
        });
    }
    // Obtengo una lista de los productos con el estado de Carrito
    listCarrito(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const productos = yield pool.query("SELECT * FROM producto where estado='Carrito'");
            res.json(productos);
        });
    }
    //Obtengo solo un producto
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const productos = yield pool.query('SELECT * FROM producto WHERE cod_producto =?', [id]);
            if (productos.length > 0) {
                return res.json(productos[0]);
            }
            else {
                res.status(404).json({ text: 'El producto no existe ' });
            } //minuto 1:27
        });
    }
    // Creo un producto    
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body);
            yield pool.query('INSERT INTO producto set ?', [req.body]);
            res.json({ message: 'Producto Guardado' });
        });
    }
    //
    delete(req, res) {
        const { id } = req.params;
        pool.query('DELETE FROM producto WHERE cod_producto =?', [id]);
        res.json({ messaage: 'El producto fue eliminado' });
    }
    //// actualiza solo el estado de Disponible a Carrito
    updateCarrito(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield pool.query("UPDATE producto set estado='Carrito' WHERE  cod_producto=?", [id]);
            res.json({ massage: 'Cambio de estado de Disponible a Carrito' });
        });
    }
    //// actualiza solo el estado de carrito a Disponible
    updateDisponible(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield pool.query("UPDATE producto set estado='Disponible' WHERE  cod_producto=?", [id]);
            res.json({ massage: 'Cambio de estado de Disponible a Carrito' });
        });
    }
    //// actualiza solo el estado de carrito a Vendido
    updateVendido(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield pool.query("UPDATE producto set estado='Vendido' WHERE  cod_producto=?", [id]);
            res.json({ massage: 'Cambio de estado de Disponible a Carrito' });
        });
    }
    /// Actualiza todo los datos del producto
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield pool.query('UPDATE producto set ? WHERE  cod_producto=?', [req.body, id]);
            res.json({ massage: 'El producto se ha sido actualizado' });
        });
    }
    //Obtengo solo un producto pero por medio de su nombre
    getBuscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const productos = yield pool.query("SELECT * FROM producto WHERE estado ='Disponible' and nombre =?", [id]);
            if (productos.length > 0) {
                return res.json(productos);
            }
            else {
                res.status(404).json({ text: 'El producto no existe ' });
            } //minuto 1:27
        });
    }
    // Obtengo una lista de los productos disponibles
    reporte1(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const productos = yield pool.query("Select  producto.nombre, count(nombre)as vendidos FROM detalle_factura INNER JOIN producto ON detalle_factura.cod_producto_fk = producto.cod_producto group by nombre order by vendidos desc");
            res.json(productos);
        });
    }
    // Obtengo una lista de los productos disponibles
    reporte2(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const productos = yield pool.query("Select  nombre, count(nombre)as compras FROM factura INNER JOIN usuario ON factura.cod_usuario_fk = usuario.cod_usuario group by nombre order by nombre asc");
            res.json(productos);
        });
    }
}
exports.productosController = new ProductosController();
