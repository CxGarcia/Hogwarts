import { DataTypes, Model, Sequelize, BuildOptions } from 'sequelize';

interface CustomerAttributes {
  id?: number;
  name: string;
  phone: string;
  email: string;
  password: string;
  location: string;
}

interface CustomerModel extends Model<CustomerAttributes>, CustomerAttributes {}

type CustomerStatic = typeof Model & {
  new (values?: CustomerAttributes, options?: BuildOptions): CustomerModel;
};

export function CustomerFactory(sequelize: Sequelize): CustomerStatic {
  return <CustomerStatic>sequelize.define('customers', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
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
      unique: true,
      validate: {
        isEmail: {
          msg: 'Must be a valid email address',
        },
      },
    },
    password: {
      type: DataTypes.STRING(1234),
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });
}
