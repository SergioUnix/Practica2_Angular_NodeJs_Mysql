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
class ProveedoresController {
    // Obtengo una lista de los productos registrados
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const proveedores = yield pool.query('SELECT * FROM proveedor');
            res.json(proveedores);
        });
    }
    //Obtengo solo un producto
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const proveedores = yield pool.query('SELECT * FROM proveedor WHERE cod_proveedor =?', [id]);
            if (proveedores.length > 0) {
                return res.json(proveedores[0]);
            }
            else {
                res.status(404).json({ text: 'El proveedor no existe ' });
            } //
        });
    }
    // Creo un producto    
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body);
            yield pool.query('INSERT INTO proveedor set ?', [req.body]);
            res.json({ message: 'Proveedor Guardado' });
        });
    }
    //
    delete(req, res) {
        const { id } = req.params;
        pool.query('DELETE FROM proveedor WHERE cod_proveedor =?', [id]);
        res.json({ messaage: 'El proveedor fue eliminado' });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield pool.query('UPDATE proveedor set ? WHERE  cod_proveedor=?', [req.body, id]);
            res.json({ massage: 'El proveedor se ha sido actualizado' });
        });
    }
}
exports.proveedoresController = new ProveedoresController();
