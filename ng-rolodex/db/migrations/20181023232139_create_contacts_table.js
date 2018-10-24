
exports.up = function(knex, Promise) {
    return knex.schema.createTable('contacts', (table) => {
        table.increments(); 
        table.string('name').notNullable();
        table.string('address').notNullable();
        table.integer('mobile').default(null);
        table.inteeger('work').default(null);
        table.integer('home').default(null);
        table.string('email').default(null);
        table.string('twitter').default(null);
        table.string('instagram').default(null);
        table.string('github').default(null);
  })
};

exports.down = function(knex, Promise) {
  
};
