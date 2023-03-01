//Classe do controlador das rotas Token

import User from '../models/User';
import Jwt from 'jsonwebtoken';
import { authenticator } from '../config/authenticator';

class TokenController {
    // Função para fazer Login do usuário, gerando um código de autenticação JWT
    async store(req: any, res: any) {
        const { email = '', password = '' } = req.body;
        console.log(email, password);
        if (!email || !password) {
            return res.status(401).json({
                errors: ['Email ou senha inválidos!'],
            });
        }

        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({
                errors: ['Usuário não existe!'],
            });
        }

        if (!(await user.passwordIsValid(password))) {
            return res.json({
                errors: ['Senha inválida!'],
            });
        }

        const { id } = user;
        const token = Jwt.sign({ id, email }, authenticator.secret, {
            expiresIn: authenticator.expires,
        });

        return res.json({ token });
    }
}

export default new TokenController();
