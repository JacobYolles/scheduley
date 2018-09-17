module.exports = function(sequelize, DataTypes) {
    var Day = sequelize.define("Day", {
        date: DataTypes.DATE, 
        event: DataTypes.STRING, 
        start: DataTypes.DATE, 
        end: DataTypes.DATE
    })
    return Day; 
}