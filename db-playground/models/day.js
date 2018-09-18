module.exports = function(sequelize, DataTypes) {
    var Day = sequelize.define("Day", {
        day: { type: DataTypes.DATEONLY, 
            primaryKey: true
        }
    })
    Day.associate = function(models) {
        Day.hasMany(models.Event, {
            onDelete: 'cascade'
        });
    }
    return Day; 
}