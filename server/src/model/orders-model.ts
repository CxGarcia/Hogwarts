import { DataTypes, Model, Sequelize, BuildOptions } from 'sequelize';

interface OrderAttributes {
  id?: number;
  cost: number;
  paymentMethod: string;
  customerId: number;
  technicianId: number;
  serviceId: number;
}

interface OrderModel extends Model<OrderAttributes>, OrderAttributes {}

type OrderStatic = typeof Model & {
  new (values?: OrderAttributes, options?: BuildOptions): OrderModel;
};

export function OrderFactory(sequelize: Sequelize): OrderStatic {
  return <OrderStatic>sequelize.define('orders', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    cost: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    customerId: {
      type: DataTypes.INTEGER,
    },
    technicianId: {
      type: DataTypes.INTEGER,
    },
    serviceId: {
      type: DataTypes.INTEGER,
    },
    paymentMethod: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });
}
