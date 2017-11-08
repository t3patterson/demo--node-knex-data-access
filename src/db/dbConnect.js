const knexConfig = require('../../config/dbAccess.js')
const knex = require('knex')

const db = knex(knexConfig.development)
module.exports = db
