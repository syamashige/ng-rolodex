const bookshelf = require('./bookshelf');

const Contacts = bookshelf.Model.extend({
    tableName: 'contacts',
    idAttribute: 'id',
    hasTimeStamps: true
});

module.exports = Contacts;