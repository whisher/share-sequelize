'use strict';

var Schema = require('../schemas/users');

module.exports = function(sequelize, DataTypes) {
    var Users =  sequelize.define(
        Schema.name,
		Schema.definition(DataTypes),
                        {
                            paranoid: true,
                            classMethods:{
                                associate:function(models){}
                            }
                        }
  	);
    return Users;
};
