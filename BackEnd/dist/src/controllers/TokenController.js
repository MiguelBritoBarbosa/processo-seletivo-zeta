"use strict";
//Classe do controlador das rotas Token
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticator_1 = require("../config/authenticator");
class TokenController {
    // Função para fazer Login do usuário, gerando um código de autenticação JWT
    store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email = '', password = '' } = req.body;
            console.log(email, password);
            if (!email || !password) {
                return res.status(401).json({
                    errors: ['Email ou senha inválidos!'],
                });
            }
            const user = yield User_1.default.findOne({ where: { email } });
            if (!user) {
                return res.status(401).json({
                    errors: ['Usuário não existe!'],
                });
            }
            if (!(yield user.passwordIsValid(password))) {
                return res.json({
                    errors: ['Senha inválida!'],
                });
            }
            const { id } = user;
            const token = jsonwebtoken_1.default.sign({ id, email }, authenticator_1.authenticator.secret, {
                expiresIn: authenticator_1.authenticator.expires,
            });
            return res.json({ token });
        });
    }
}
exports.default = new TokenController();
