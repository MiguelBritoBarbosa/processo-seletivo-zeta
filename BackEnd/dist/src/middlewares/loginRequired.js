"use strict";
//Função middleware para Login JWT
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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../models/User"));
const authenticator_1 = require("../config/authenticator");
exports.default = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // Função que recebe um token JWT para efetuar um login de usuário
    const { auth } = req.headers;
    if (!auth) {
        return res.status(401).json({
            errors: ['Login necessário'],
        });
    }
    const [, token] = auth.split(' ');
    try {
        // Convertendo o retorno da função `verify` para um objeto typescript
        const dados = JSON.parse(JSON.stringify(jsonwebtoken_1.default.verify(token, authenticator_1.authenticator.secret)));
        console.log(dados);
        const { id, email } = dados;
        const user = yield User_1.default.findOne({ where: { id, email } });
        if (!user) {
            return res.status(401).json({
                errors: ['Usuário inválido'],
            });
        }
        req.userId = id;
        req.userEmail = email;
        return next();
    }
    catch (e) {
        return res.status(401).json({
            errors: ['Token inválido ou expirado!'],
        });
    }
});
