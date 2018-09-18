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
<<<<<<< HEAD
// createdAt: {
//   type: sequelize.DATE
// },
// updatedAt: {
//   type: sequelize.DATE
// },
=======
small_bio: {
  type: DataTypes.STRING,
  allowNull: true
}
>>>>>>> 118dfe6d930c91e3f8eb6b78613a7afe5114ddce
  });
  return Hair;
};

// service_provided VARCHAR(100) NOT NULL,
//     days_provided VARCHAR(100) NOT NULL,
//     current_price DECIMAL(4, 2) ZEROFILL NOT NULL,