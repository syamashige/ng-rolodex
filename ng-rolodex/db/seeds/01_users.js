
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'sarah', name: 'Sarah Yamashige', email: 'yamashige.sarah@gmail.com', address:'Somewhere on Waiola Street'},
        {username: 'earthtomari', name: 'Mari Nakamura', email: 'earthtomari@gmail.com', address: 'Somewhere in Hawaii Kai'},
        {username: 'sassylouie', name: 'Cassie Louie', email: 'sassylouie@gmail.com', address: 'Somwhere in Kaimuki' }
      ]);
    });
};
