const bookshelf = require('./bookshelf');

const Users = bookshelf.Model.extend({
    tableName: 'users',
    idAttribute: 'id',
    hasTimeStamps: true
});

module.exports = Users;