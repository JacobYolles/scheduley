module.exports = function (sequelize, DataTypes) {
    var Event = sequelize.define("Event", {
        DayDay: {
            type: DataTypes.DATEONLY,
        },
        event: DataTypes.STRING,
        start: DataTypes.DATE,
        end: DataTypes.DATE
    })
    Event.associate = function (models) {
        Event.belongsTo(models.Day, {
            foreignKey: {
                allowNull: false
            }
        });
        Event.belongsTo(models.Service, {
            foreignKey: {
                allowNull: true
            }
        })
    }

    return Event;
}