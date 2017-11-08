const tableName = 'person'

const seedData = [
  {
    firstName: 'Travis',
    lastName: 'Hubbardo',
    age: 33,
    isActive: true
  },
  {
    firstName: 'Yair',
    lastName: 'Rodriguez',
    age: 25,
    isActive: false
  },
  {
    firstName: 'Enrique',
    lastName: 'Carralt',
    age: 34,
    isActive: true
  }
]

module.exports.seed = function(knex, Promise){
  return knex('person')
    .del()
    .then(()=> knex.insert(seedData).into('person') )
}
