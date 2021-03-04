module.exports = (sequelize, DataTypes) => {

  const Order = sequelize.define('Order', {

    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },

    cost: {
      type: DataTypes.DECIMAL,
      allowNull: false,

    },
    paymentMethod: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  Order.associate = (model) => {
    Order.hasOne(model.Service);
    Order.hasOne(model.Technician);
    Order.hasOne(model.Customer);
  };

  return Order;

};

