import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '.';

interface ServiceAttributes {
  id: number;
  name: string;
}

//id is optional at creation time
interface ServiceCreationAttributes extends Optional<ServiceAttributes, 'id'> {}

interface ServiceInstance
  extends Model<ServiceAttributes, ServiceCreationAttributes>,
    ServiceAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const Service = sequelize.define<ServiceInstance>('Service', {
  id: {
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    type: DataTypes.UUID,
    unique: true,
  },
  name: {
    allowNull: true,
    type: DataTypes.TEXT,
  },
});

export default Service;
