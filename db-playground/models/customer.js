module.exports = function (sequelize, DataTypes) {
    var Customer = sequelize.define('Customer', {
        name: DataTypes.STRING, 
        phone: DataTypes.STRING,
        comment: DataTypes.STRING
    })
    Customer.associate = function(models) {
        Customer.belongsTo(models.Event, {
            foreignKey: {
                allowNull: true
            }
        })
    }
    return Customer;
}
