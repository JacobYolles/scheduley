module.exports = function(sequelize, DataTypes) {
  var Hair = sequelize.define("Hair", {
service_provided: {
  type: DataTypes.STRING,
  allowNull: false
},
  days_provided: {
    type: DataTypes.STRING,
    allowNull: false
  },   
current_price: {
  type: DataTypes.INTEGER,
  allowNull: false
},
// createdAt: {
//   type: sequelize.DATE
// },
// updatedAt: {
//   type: sequelize.DATE
// },
  });
  return Hair;
};

// service_provided VARCHAR(100) NOT NULL,
//     days_provided VARCHAR(100) NOT NULL,
//     current_price DECIMAL(4, 2) ZEROFILL NOT NULL,