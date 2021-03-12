import { DataTypes, Model, Sequelize, BuildOptions } from 'sequelize';

interface OrderAttributes {
  id?: number;
  cost: number;
  paymenMethod: string;
}

interface OrderModel extends Model<OrderAttributes>, OrderAttributes { }

type OrderStatic = typeof Model & {
  new(values?: OrderAttributes, options?: BuildOptions): OrderModel;
};

export function OrderFactory(sequelize: Sequelize): OrderStatic {
  return <OrderStatic>sequelize.define('Orders', {
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


}
// TODO associations
// Order.associate = (model) => {
//   Order.belongsTo(model.Service);
//   Order.belongsTo(model.Technician);
//   Order.belongsTo(model.Customer);
// };