// Classe do relacionamento de User e Banco de Dados

import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';
import database from '../database/connection';

class User extends Model {
    public id!: number;
    public nome!: string;
    public email!: string;
    public password_hash!: string;
    public password!: string;
    public readonly created_at!: Date;
    public readonly updated_at!: Date;

    public async passwordIsValid(password: string): Promise<boolean> {
        return bcryptjs.compare(password, this.password_hash);
    }
}

User.init(
    {
        nome: {
            type: Sequelize.STRING,
            defaultValue: '',
            validate: {
                len: {
                    args: [3, 255],
                    msg: 'Este Campo precisa ter no mínimo 3 caracteres!',
                },
            },
        },
        email: {
            type: Sequelize.STRING,
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
            type: Sequelize.STRING,
            defaultValue: '',
        },
        password: {
            type: Sequelize.VIRTUAL,
            defaultValue: '',
            validate: {
                len: {
                    args: [6, 255],
                    msg: 'Este Campo precisa ter no mínimo 6 caracteres!',
                },
            },
        },
    },
    {
        sequelize: database.connection,
    },
);

// Encriptação da senha do usuário
User.addHook('beforeSave', async (user: User): Promise<void> => {
    if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);
    }
});

export default User;
