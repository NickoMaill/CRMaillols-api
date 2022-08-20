import dotenv from 'dotenv';
import { IConfigEnv } from '~/types/configTypes';

class ConfigManager {
    public readonly __env: IConfigEnv;

    constructor() {
        dotenv.config({
            path: this.configEnvFile()
        });
        this.__env = {
            NODE_ENV: process.env.NODE_ENV,
            PGHOST: process.env.PGHOST,
            PGDATABASE: process.env.PGDATABASE,
            PGUSER: process.env.PGUSER,
            PGPORT: process.env.PGPORT,
            PGPASSWORD: process.env.PGPASSWORD,
            DBDIALECT: process.env.DBDIALECT
        };        
    }

    public configEnvFile(): string {
        if (process.env.NODE_ENV === 'development') {
            return '.env.development.local';
        } else {
            return '.env.development';
        }
    }

    public sslConfig(): boolean {
        if (process.env.NODE_ENV === 'development') {
            return false;
        } else {
            return true;
        }
    }
}

export default new ConfigManager();
