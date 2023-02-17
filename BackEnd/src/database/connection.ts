//Classe da conexão com o banco de dados através do Sequelize

import Sequelize from 'sequelize';
import * as databaseConfig from '../config/database';

class Database {
    public connection!: Sequelize.Sequelize;

    constructor() {
        this.init();
    }

    init(): void {
        this.connection = new Sequelize.Sequelize(databaseConfig);
    }
}

const database: Database = new Database();

export default database;
