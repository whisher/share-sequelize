'use strict';

module.exports = {
    name: 'users',
    definition : function(DataTypes)  {
        return {
            userId: {
                type: DataTypes.INTEGER,
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
