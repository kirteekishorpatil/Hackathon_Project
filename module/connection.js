var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Kirtee@123",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
con.query("CREATE DATABASE hackathon_project", function (err, result) {
    if (err){
        console.log("Database  already created");
    }
    else{
        console.log("Database created");
    }
  });

const knex = require("knex")({

    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'Kirtee@123',
      database: 'hackathon_project'
    }
  })
  function create_table() {
    knex.schema.hasTable("sumit_from").then(function (exists) {
      if (!exists) {
        console.log({ Success: `users table created successfully.` });
        
        return knex.schema.createTable("sumit_from", function (t) {
          t.increments('id').primary(),
            t.string('First_Name'),
            t.string('Last_name'),
            t.string('Address'),
            t.string('Password'),
            t.string('Conform_Password'),
            t.integer('Phone_No'),
            t.string('E_Mail'),
            t.integer('Age')
        });
      } else {
        console.log({ Sorry: `users table already exist!` });
      }
    });
  }
create_table()

module.exports=knex