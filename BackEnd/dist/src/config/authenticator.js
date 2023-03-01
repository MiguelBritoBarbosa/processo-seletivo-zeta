"use strict";
//Objeto com as propriedades do token
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticator = void 0;
exports.authenticator = {
    secret: String(process.env.TOKEN_SECRET),
    expires: String(process.env.TOKEN_EXPIRATION),
};
