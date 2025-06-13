module.exports = {
  development: {
    client: "mssql",
    connection: {
      server: "localhost",
      database: "node_practice",
      user: "sa",
      password: "YourStrong!Passw0rd",
      port: 1433,
    },
    pool: {
      min: 2,
      max: 10,
      idleTimeoutMillis: 20000,
    },
    options: {
      encrypt: false,
      enableArithAbort: true,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations",
    },
  },
};
