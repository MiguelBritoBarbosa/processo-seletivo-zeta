"use strict";
//Classe do controlador das rotas User
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
class UserController {
    // Função para cadastrar um usuário na base de dados
    store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const novoUsuario = yield User_1.default.create(req.body);
                return res.json(novoUsuario);
            }
            catch (e) {
                return res.status(400).json({
                    msg: 'Ocorreu um erro:',
                    errors: e.errors.map((err) => err.message),
                });
            }
        });
    }
    // Função para consultar todos os usuários da base de dados
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('teste');
                const users = yield User_1.default.findAll();
                return res.json(users);
            }
            catch (e) {
                return res.json({ erro: e });
            }
        });
    }
    // Função para consultar um usuário da base de dados
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const user = yield User_1.default.findByPk(id);
                return res.json(user);
            }
            catch (e) {
                return res.json(null);
            }
        });
    }
    // Função atualizar um usuário na base de dados (necessita de Login)
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield User_1.default.findByPk(req.userId);
                if (!user) {
                    return res.status(400).json({
                        errors: ['Usuário não existe!'],
                    });
                }
                const newUser = yield user.update(req.body);
                return res.json(newUser);
            }
            catch (e) {
                return res.status(400).json({
                    msg: 'Ocorreu um erro:',
                    errors: e.errors.map((err) => err.message),
                });
            }
        });
    }
    // Função para excluir um usuário da base de dados (necessita de Login)
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield User_1.default.findByPk(req.userId);
                if (!user) {
                    return res.status(400).json({
                        errors: ['Usuário não existe!'],
                    });
                }
                yield user.destroy();
                return res.json({
                    msg: `Usuário ${user.nome} foi deletado com sucesso!`,
                    user,
                });
            }
            catch (e) {
                return res.status(400).json({
                    msg: 'Ocorreu um erro:',
                    errors: e.errors.map((err) => err.message),
                });
            }
        });
    }
}
exports.default = new UserController();
