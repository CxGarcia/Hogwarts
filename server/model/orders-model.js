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
    Order.belongsTo(model.Service);
    Order.belongsTo(model.Technician);
    Order.belongsTo(model.Customer);
  };

  return Order;

};

