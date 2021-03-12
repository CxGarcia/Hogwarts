import { DataTypes, Model, Sequelize, BuildOptions } from 'sequelize';

interface TechnicianAttributes {
  id?: number;
  name: string;
  phone: string;
  email: string;
}

interface TechnicianModel
  extends Model<TechnicianAttributes>,
    TechnicianAttributes {}

type TechnicianStatic = typeof Model & {
  new (values?: TechnicianAttributes, options?: BuildOptions): TechnicianModel;
};

export function TechnicianFactory(sequelize: Sequelize): TechnicianStatic {
  return <TechnicianStatic>sequelize.define('services', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
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
