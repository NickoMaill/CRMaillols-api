import { Model, DataTypes, ModelStatic, Sequelize } from 'sequelize';
import { IMeetingAddressEntity } from '~/data/contracts/meetings';

export default class MeetingAddresses extends Model implements IMeetingAddressEntity {
    public readonly id: number;
    public readonly meetingId: number;
    public readonly street?: string;
    public readonly city?: string;
    public readonly postalCode?: string;
    public readonly country?: string;
    public readonly details?: string;
    public readonly latitude?: number;
    public readonly longitude?: number;
    public readonly createdAt?: Date;
    public readonly updatedAt?: Date;

    static associate(models: any) {
        this.hasMany(models.Meetings, { foreignKey: 'id', as: 'meetingId' })
    }
}
module.exports = (sequelize: any) => {
    MeetingAddresses.init(
        {
            longitude: {
                type: DataTypes.DECIMAL(15, 12),
            },
            latitude: {
                type: DataTypes.DECIMAL(15, 12),
            },
            street: {
                type: DataTypes.STRING,
            },
            postalCode: {
                type: DataTypes.STRING(50),
            },
            city: {
                type: DataTypes.STRING(50),
            },
            country: {
                type: DataTypes.STRING(50),
            },
        },
        {
            sequelize,
            modelName: 'MeetingAddresses',
        }
    );
    return MeetingAddresses;
};
