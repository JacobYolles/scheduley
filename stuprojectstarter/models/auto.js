module.exports = function(sequelize, DataTypes) {
    var Auto = sequelize.define("Auto", {
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
    allowNull: true
  },
  servicing_technician: {
      type: DataTypes.STRING,
      allowNull: true
  }
    });
    return Auto;
  };
  
  // service_provided VARCHAR(100) NOT NULL,
  //     days_provided VARCHAR(100) NOT NULL,
  //     current_price DECIMAL(4, 2) ZEROFILL NOT NULL,