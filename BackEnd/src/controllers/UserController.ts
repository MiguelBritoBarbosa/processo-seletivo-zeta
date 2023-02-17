//Classe do controlador das rotas User

import User from '../models/User';

class UserController {
    // Função para cadastrar um usuário na base de dados
    async store(req: any, res: any) {
        try {
            const novoUsuario = await User.create(req.body);
            return res.json(novoUsuario);
        } catch (e: any) {
            return res.status(400).json({
                msg: 'Ocorreu um erro:',
                errors: e.errors.map((err: any) => err.message),
            });
        }
    }

    // Função para consultar todos os usuários da base de dados
    async index(req: any, res: any) {
        try {
            console.log('teste');
            const users = await User.findAll();
            return res.json(users);
        } catch (e: any) {
            return res.json({ erro: e });
        }
    }

    // Função para consultar um usuário da base de dados
    async show(req: any, res: any) {
        try {
            const { id } = req.params;
            const user = await User.findByPk(id);
            return res.json(user);
        } catch (e: any) {
            return res.json(null);
        }
    }

    // Função atualizar um usuário na base de dados (necessita de Login)
    async update(req: any, res: any) {
        try {
            const user = await User.findByPk(req.userId);

            if (!user) {
                return res.status(400).json({
                    errors: ['Usuário não existe!'],
                });
            }
            const newUser = await user.update(req.body);

            return res.json(newUser);
        } catch (e: any) {
            return res.status(400).json({
                msg: 'Ocorreu um erro:',
                errors: e.errors.map((err: any) => err.message),
            });
        }
    }

    // Função para excluir um usuário da base de dados (necessita de Login)
    async delete(req: any, res: any) {
        try {
            const user = await User.findByPk(req.userId);

            if (!user) {
                return res.status(400).json({
                    errors: ['Usuário não existe!'],
                });
            }

            await user.destroy();

            return res.json({
                msg: `Usuário ${user.nome} foi deletado com sucesso!`,
                user,
            });
        } catch (e: any) {
            return res.status(400).json({
                msg: 'Ocorreu um erro:',
                errors: e.errors.map((err: any) => err.message),
            });
        }
    }
}

export default new UserController();
