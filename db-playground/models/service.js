module.exports = function(sequelize, DataTypes) {
    var Service = sequelize.define("Service", {
        name: {
            type: DataTypes.STRING, 
            allowNull: false, 
            validate: {
                len: [1]
            }
        },
        max_simul: {
            type: DataTypes.INTEGER,
            allowNull: true, 
        },
        duration: DataTypes.INTEGER
    })
    Service.associate = function(models) {
        Service.hasMany(models.Blackout, {
            onDelete: 'cascade',
            })
        }
    return Service; 
}