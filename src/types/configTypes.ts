// INTERFACE ///////////////////////////////////////////////////////////////////////

export interface IConfigEnv {
    NODE_ENV: string | undefined,
    PGHOST: string | undefined,
    PGDATABASE: string | undefined,
    PGUSER: string | undefined,
    PGPORT: string | undefined,
    PGPASSWORD: string | undefined,
    [key: string]: string | undefined
}