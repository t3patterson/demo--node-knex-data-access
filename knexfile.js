const devConfig = {
  client: 'mysql2',
  connection: {
    host : '127.0.0.1',
    port: '3306',
    user : '------your-db-username-----',
    password : '------your-db-user-password------',
    database : '-----yourdb-----'
  },
  migrations: {
    directory: './src/db/migrations'
  },
  seeds: {
    directory: './src/db/seeds'
  }
}

module.exports = {
  development: devConfig,
  production: {}
}
