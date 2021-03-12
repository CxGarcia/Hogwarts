import { DataTypes, Model, Sequelize, BuildOptions } from 'sequelize';

interface ServiceAttributes {
  name: string;
  id?: number;
}

interface ServiceModel extends Model<ServiceAttributes>, ServiceAttributes {}

type ServiceStatic = typeof Model & {
  new (values?: ServiceAttributes, options?: BuildOptions): ServiceModel;
};

export function ServiceFactory(sequelize: Sequelize): ServiceStatic {
  return <ServiceStatic>sequelize.define('services', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      allowNull: true,
      type: DataTypes.TEXT,
    },

    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  });
}
