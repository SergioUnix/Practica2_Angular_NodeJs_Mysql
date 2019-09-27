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
    // Obtengo una lista de los facturas registradas
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const facturas = yield pool.query('select cod_factura,nit,fecha,usuario.nombre,cod_usuario FROM usuario INNER JOIN factura ON cod_usuario = cod_usuario_fk ');
            res.json(facturas);
        });
    }
    // Obtengo una lista de los facturas registradas
    listUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const facturas = yield pool.query('select cod_factura,nit,fecha,usuario.nombre,cod_usuario FROM usuario INNER JOIN factura ON cod_usuario = cod_usuario_fk where cod_usuario=? ', [id]);
            res.json(facturas);
        });
    }
    // Creo una factura 
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body);
            yield pool.query('INSERT INTO factura set ?', [req.body]);
            res.json({ message: 'Factura creada' });
        });
    }
    // Devuelvo el codigo de la ultima factura creada dado el codigo cod_usuario_fk
    ultimoRegistro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const ultimoregistro = yield pool.query('select cod_factura from factura  where cod_usuario_fk=? order by cod_factura desc limit 1', [id]);
            res.json(ultimoregistro[0]);
        });
    }
    // Creo un detalle_factura
    createDetalle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield pool.query('INSERT INTO detalle_factura set ?', [req.body]);
            res.json({ message: 'detalle guardado' });
        });
    }
}
exports.facturasController = new FacturasController();
