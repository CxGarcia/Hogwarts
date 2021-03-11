module.exports = (sequelize, DataTypes) => {

  const Technician = sequelize.define('Technician', {

    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,

    },

    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  Technician.associate = (model) => {
    Technician.hasMany(model.Order, { as: 'orders', constraints: false, allowNull: true, defaultValue: null });
  };


  return Technician;


};

