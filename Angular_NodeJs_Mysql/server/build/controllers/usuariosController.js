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
class UsuariosController {
    // Obtengo una lista de los productos registrados
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = yield pool.query('SELECT * FROM usuario');
            res.json(usuarios);
        });
    }
    //Obtengo solo un producto
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuarios = yield pool.query('SELECT * FROM usuario WHERE cod_usuario =?', [id]);
            if (usuarios.length > 0) {
                return res.json(usuarios[0]);
            }
            else {
                res.status(404).json({ text: 'El usuario no existe ' });
            } //minuto 1:27
        });
    }
    // Creo un producto    
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body);
            yield pool.query('INSERT INTO usuario set ?', [req.body]);
            res.json({ message: 'Usuario Guardado' });
        });
    }
    //
    delete(req, res) {
        const { id } = req.params;
        pool.query('DELETE FROM usuario WHERE cod_usuario =?', [id]);
        res.json({ messaage: 'El usuario fue eliminado' });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield pool.query('UPDATE usuario set ? WHERE  cod_usuario=?', [req.body, id]);
            res.json({ massage: 'El usuario se ha sido actualizado' });
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //const {id}=req.params;
            const { nickname } = req.params;
            const { pass } = req.params;
            const usuarios = yield pool.query("Select * from usuario where nickname=? and password=?", [nickname, pass]);
            if (usuarios.length > 0) {
                return res.json(usuarios[0]);
            }
            else {
                res.status(404).json({ text: 'El usuario no encontrado' });
            }
        });
    }
}
exports.usuariosController = new UsuariosController();
