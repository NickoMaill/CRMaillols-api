import configManager from './src/manager/configManager';

module.exports = {
    development: {
        username: configManager.__env.PGUSER,
        password: configManager.__env.PGPASSWORD,
        database: configManager.__env.PGDATABASE,
        host: configManager.__env.PGHOST,
        dialect: configManager.__env.DBDIALECT,
        port: configManager.__env.PGPORT,
    },
    test: {
        username: configManager.__env.PGUSER,
        password: configManager.__env.PGPASSWORD,
        database: configManager.__env.PGDATABASE,
        host: configManager.__env.PGHOST,
        dialect: configManager.__env.DBDIALECT,
        port: configManager.__env.PGPORT,
    },
    production: {
        username: configManager.__env.PGUSER,
        password: configManager.__env.PGPASSWORD,
        database: configManager.__env.PGDATABASE,
        host: configManager.__env.PGHOST,
        dialect: configManager.__env.DBDIALECT,
        port: configManager.__env.PGPORT,
    },
};
