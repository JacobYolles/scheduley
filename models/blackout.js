module.exports = function(sequelize, DataTypes) {
    var Blackout = sequelize.define("Blackout", {
        start: {
            type: DataTypes.DATE, 
            allowNull: false, 
        },
        end: {
            type: DataTypes.DATE,
            allowNull: false, 
        },
    });
    Blackout.associate = function(models) {
        Blackout.belongsTo(models.Service, {
            foreignKey: {
                allowNull: false,
            }
        })
    }
    return Blackout; 
}