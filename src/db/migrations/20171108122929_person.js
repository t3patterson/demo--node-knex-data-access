
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('person', (tbl)=>{
      //primary key

      tbl.increments()

      //Fields
      tbl.string('firstName')
      tbl.string('lastName')
      tbl.integer('age')
      tbl.boolean('isActive')

      return tbl
    })
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('person')
};
