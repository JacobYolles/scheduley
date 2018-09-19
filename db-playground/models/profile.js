module.exports = function(sequelize, DataTypes) {
    var Profile = sequelize.define("Profile", {
        day: DataTypes.STRING, 
        max_simul: DataTypes.INTEGER, 
        start: DataTypes.DATE, 
        end: DataTypes.DATE
    })
    return Profile; 
}