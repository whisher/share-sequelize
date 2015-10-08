'use strict';

/**
 * Module dependencies.
 */
var Schema = require('../schemas/users');

module.exports = {

    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable(
            Schema.name,
            Schema.definition(Sequelize)
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable(Schema.name);
    }

};
