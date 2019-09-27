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
class FacturasController {
    // Obtengo una lista de los productos registrados
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const facturas = yield pool.query('SELECT * FROM producto');
            res.json(facturas);
        });
    }
    //Obtengo solo un producto
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const facturas = yield pool.query('SELECT * FROM producto WHERE cod_producto =?', [id]);
            if (facturas.length > 0) {
                return res.json(facturas[0]);
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
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield pool.query('UPDATE producto set ? WHERE  cod_producto=?', [req.body, id]);
            res.json({ massage: 'El producto se ha sido actualizado' });
        });
    }
}
exports.facturasController = new FacturasController();
