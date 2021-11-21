//craeted using command:
//npx knex migrate:make init --migrations-directory db/migrations
exports.up = function(knex) {//new changes
  return knex.schema.createTable('User',table=>{
      table.increments('ID'),
      //table.increments('ID').uniquie(),
      table.string('Name'),
      table.string('Address'),
      table.timestamps(true,true);
  })
};

exports.down = function(knex) {//rollback
  return knex.schema.dropTable('User');
};


//To run the migrations
//npx knex migrate:latest --knexfile db/knexfile.js --- added in package script

//It chraetes three tables 
//migration file - all migrations which we have run previously with name & time
//migration file - it is type of lock to understand tht a person is using migration