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
class AsociarController {
    // Obtengo una lista de las asociaciones registradas
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const facturas = yield pool.query('select cod_producto_proveedor, producto.nombre as nomProducto, proveedor.nombre as nomProveedor FROM producto INNER JOIN producto_proveedor ON cod_producto = cod_producto_fk INNer JOIN proveedor ON cod_proveedor = cod_proveedor_fk');
            res.json(facturas);
        });
    }
    // Creo una asociacion
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body);
            yield pool.query('INSERT INTO practica2.producto_proveedor set ?', [req.body]);
            res.json({ message: 'Factura Asociacion' });
        });
    }
    // eliminar todos las asociaciones a un producto
    delete(req, res) {
        const { id } = req.params;
        pool.query('DELETE FROM producto_proveedor where cod_producto_fk=?', [id]);
        res.json({ messaage: 'Asociacion a producto eliminado' });
    }
}
exports.asociarController = new AsociarController();
