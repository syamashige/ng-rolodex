
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (table) => {
        table.increments();
        table.string('username').notNullable();
      table.unique('username');
        table.string('name').notNullable();
        table.string('email').default(null);
        table.string('address').default(null);
        table.timestamp('created_at').default(knex.fn.now());
        table.timestamp('updated_at').default(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
