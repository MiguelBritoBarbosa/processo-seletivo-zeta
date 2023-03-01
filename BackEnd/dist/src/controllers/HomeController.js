"use strict";
//Classe do controlador das rotas Home
Object.defineProperty(exports, "__esModule", { value: true });
class HomeController {
    index(req, res) {
        res.json({
            Home: 'online',
        });
    }
}
exports.default = new HomeController();
