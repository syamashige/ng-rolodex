
exports.up = function(knex, Promise) {
    return knex.schema.createTable('contacts', (table) => {
        table.increments(); 
        table.string('name').notNullable();
        table.string('address').notNullable();
        table.string('mobile').default(null);
        table.string('work').default(null);
        table.string('home').default(null);
        table.string('email').default(null);
        table.string('twitter').default(null);
        table.string('instagram').default(null);
        table.string('github').default(null);
        table.integer('created_by').unsigned().notNullable;
        table.foreign('created_by').references('id').inTable('users');
  })
};

exports.down = function(knex, Promise) {
  
};
