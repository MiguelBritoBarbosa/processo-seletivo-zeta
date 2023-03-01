"use strict";
// Classe do relacionamento de User e Banco de Dados
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const sequelize_1 = __importStar(require("sequelize"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const connection_1 = __importDefault(require("../database/connection"));
class User extends sequelize_1.Model {
    passwordIsValid(password) {
        return __awaiter(this, void 0, void 0, function* () {
            return bcryptjs_1.default.compare(password, this.password_hash);
        });
    }
}
User.init({
    nome: {
        type: sequelize_1.default.STRING,
        defaultValue: '',
        validate: {
            len: {
                args: [3, 255],
                msg: 'O campo Nome precisa ter no mínimo 3 caracteres!',
            },
        },
    },
    email: {
        type: sequelize_1.default.STRING,
        defaultValue: '',
        unique: {
            name: 'email',
            msg: 'Esse email já foi cadastrado',
        },
        validate: {
            isEmail: {
                msg: 'Email inválido!',
            },
        },
    },
    password_hash: {
        type: sequelize_1.default.STRING,
        defaultValue: '',
    },
    password: {
        type: sequelize_1.default.VIRTUAL,
        defaultValue: '',
        validate: {
            len: {
                args: [6, 255],
                msg: 'O campo Senha precisa ter no mínimo 6 caracteres!',
            },
        },
    },
}, {
    sequelize: connection_1.default.connection,
});
// Encriptação da senha do usuário
User.addHook('beforeSave', (user) => __awaiter(void 0, void 0, void 0, function* () {
    if (user.password) {
        user.password_hash = yield bcryptjs_1.default.hash(user.password, 8);
    }
}));
exports.default = User;
