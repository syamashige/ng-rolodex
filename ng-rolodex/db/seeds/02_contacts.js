
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contacts').insert([
        {name: 'Sarah Yamashige', address: '1820 Waiola St., Honolulu, HI 96826', mobile:'(808) 214-0731', email: 'yamashige.sarah@gmail.com'},
        {name: 'This Person', address: 'This Place', mobile: 'somenumber', email: 'someemailaddress'},
        { name: 'Other Person', address: 'Other place', mobile: 'someothernumber', email: 'someotheremail'}
      ]);
    });
};
