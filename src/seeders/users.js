'use strict';

/**
 * Module dependencies.
 */
var Async = require('async');
var Models = require('../models');
var  User = Models.users;

/**
 * Users to insert.
 */
var users = [
    {
        firstname: 'firstname',
        lastname: 'lastname',
    }
];

var calls = [];

function createUserPromise(current, index, users) {
    calls.push(function(callback) {
        User
            .create(current)
                .then(function(user) {
                    callback(null, user);
                })
                .catch(function(err){
                    return callback(err);
                });
            });
}
users.forEach(createUserPromise);

Async.parallel(calls , function(err, results){
    if(err){
        console.log(err);
    }
    else{
        var info = results.map(function(result){
            return result.dataValues;
        });
        console.log(info);
    }
    process.exit();
});

