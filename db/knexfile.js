//Created this file using command: npx knex init
// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'Test',
      user:     'root',
      password: 'password'
    },
    pool: {
      min: 2,//min connections
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
