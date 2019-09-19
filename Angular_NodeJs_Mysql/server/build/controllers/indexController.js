"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IndexController = /** @class */ (function () {
    function IndexController() {
    }
    IndexController.prototype.index = function (req, res) {
        res.json({ text: 'API Is /api/games' });
    };
    return IndexController;
}());
exports.indexController = new IndexController();
