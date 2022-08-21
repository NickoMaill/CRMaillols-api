import dotenv from 'dotenv';
import { IConfigEnv } from '~/contracts/config';

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

    public configEnvFile(): string | undefined {
        if (process.env.NODE_ENV === 'development.local') {
            return '.env.development.local';
        }

        if (process.env.NODE_ENV === 'development'){
            return '.env.development';
        }

        if (process.env.NODE_ENV === 'production'){
            return '.env';
        }

        return

    }

    public sslConfig(): boolean {
        if (process.env.NODE_ENV === 'development.local') {
            return false;
        } else {
            return true;
        }
    }
}

export default new ConfigManager();
