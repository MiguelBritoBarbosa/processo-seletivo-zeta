'use strict';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'users',
            [
                {
                    nome: 'Miguel Brito Barbosa',
                    email: 'miguelbrito@gmail.com',
                    password_hash: await bcryptjs.hash('123546', 8),
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    nome: 'Maria Eduarda Martin da Silva',
                    email: 'mariaeduarda@gmail.com',
                    password_hash: await bcryptjs.hash('123546', 8),
                    created_at: new Date(),
                    updated_at: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('users', null, {});
    },
};
