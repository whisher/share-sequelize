'use strict';

module.exports = {
    name: 'users',
    definition : function(DataTypes)  {
        return {
            userId: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },
	firstname: {
	   type: DataTypes.STRING,
	   allowNull: false
	},
	lastname: {
                type: DataTypes.STRING,
                allowNull: false
	},
	username: {
                type:DataTypes.STRING,
                unique: true,
                allowNull: false
	},
            email: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false
	},
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            roles: {
                type: DataTypes.STRING,
                allowNull: false
            },
	createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW
	},
      	updatedAt: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW
	},
	deletedAt: {
                type:DataTypes.DATE,
	    allowNull: true
	}
        };
    }
};
