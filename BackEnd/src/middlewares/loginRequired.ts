//Função middleware para Login JWT

import Jwt from 'jsonwebtoken';
import User from '../models/User';
import { authenticator } from '../config/authenticator';

export default async (req: any, res: any, next: any) => {
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
        const dados = JSON.parse(JSON.stringify(Jwt.verify(token, authenticator.secret)));

        console.log(dados);

        const { id, email } = dados;

        const user = await User.findOne({ where: { id, email } });

        if (!user) {
            return res.status(401).json({
                errors: ['Usuário inválido'],
            });
        }

        req.userId = id;
        req.userEmail = email;
        return next();
    } catch (e) {
        return res.status(401).json({
            errors: ['Token inválido ou expirado!'],
        });
    }
};
