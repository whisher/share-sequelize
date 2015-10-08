'use strict';

/**
 * Module dependencies.
 */

var Models = require('./src/models');
var  User = Models.users;

User
    .findAll({
        order: [['createdAt','DESC']],
        attributes: ['userId', 'firstname', 'lastname']
    })
    .then(function(users) {
        console.log(users[0].dataValues);
    })
    .catch(function(err){
            console.error(err.message);
    });
