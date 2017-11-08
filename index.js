const db = require('./src/db/dbConnect.js')


db.select()
  .table('person')
  .then((d)=>{
    console.log(d)
    console.log('---exiting db---')
    db.destroy()
  })
