import configManager from './src/manager/configManager';

module.exports = {
    development: {
        username: configManager.__env.PGUSER,
        password: configManager.__env.PGPASSWORD,
        database: configManager.__env.PGDATABASE,
        host: configManager.__env.PGHOST,
        dialect: configManager.__env.DBDIALECT,
    },
    test: {
        username: configManager.__env.PGUSER,
        password: configManager.__env.PGPASSWORD,
        database: configManager.__env.PGDATABASE,
        host: configManager.__env.PGHOST,
        dialect: configManager.__env.DBDIALECT,
    },
    production: {
        username: configManager.__env.PGUSER,
        password: configManager.__env.PGPASSWORD,
        database: configManager.__env.PGDATABASE,
        host: configManager.__env.PGHOST,
        dialect: configManager.__env.DBDIALECT,
    },
};
