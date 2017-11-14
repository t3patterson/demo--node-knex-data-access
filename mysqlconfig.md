### (mysqld)
also known as MySQL Server, is the main program that does most of the work in a MySQL installation. MySQL Server manages access to the MySQL data directory that contains databases and tables. The data directory is also the default location for other information such as log files and status files.

Start mysql server:
`mysqld`

----
#### MYSQL User Config
(1) Create db user
```
mysql -u root -p -e "CREATE USER '«user»'@'localhost' IDENTIFIED BY '«password»'";
```

(2) Grant privileges
```
mysql -u root -p -e "GRANT ALL ON *.* TO '«user»'@'«localhost»'";
```

----
#### Install knex
```
npm i -g knex
```

----
#### Per Project (CLI)
(+) Create test db
```
mysql -u testuser -p -e "create database testuserdeebee"
```

(+) Create dataAccess
```
mkdir src/dataAccess
```

---

#### Knex Config (knex)
(1) Initialize knex on a new project:
```sh
knex init
```

(2) Configure `knexfile.js`
```js
// Update with your config settings.

const devConfig = {
  client: 'mysql2',
  connection: {
    host : '127.0.0.1',
    port: '3306',
    user : '«db_username»',
    password : '«user_pass»',
    database : '«project_local_db»'
  },
  migrations: {
    directory: './src/dataAccess/migrations'
  }
}

module.exports = {
  development: devConfig
  production: {}
}
```

#### Schema + Migrations
`knex migrate:make «migration-name»`
`knex migrate:latest`
