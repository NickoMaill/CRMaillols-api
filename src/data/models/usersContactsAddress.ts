import { Model, DataTypes, ModelStatic, Sequelize } from 'sequelize';
import { IContactAddress } from '~/data/contracts/userContacts';
class UsersContactsAddress extends Model implements IContactAddress {
    public readonly id: number;
    public readonly contactId: number;
    public readonly street?: string;
    public readonly city?: string;
    public readonly postalCode?: string;
    public readonly country?: string;
    public readonly details?: string;
    public readonly latitude?: number;
    public readonly longitude?: number;
    public readonly createdAt?: Date;
    public readonly updatedAt?: Date;
    public readonly deletedAt?: Date;

    static associate(models: any) {
        this.hasMany(models.UsersContacts, { foreignKey: 'id', as: 'contactId' });
    }
}
module.exports = (sequelize: any) => {
    UsersContactsAddress.init(
        {
            street: {
                type: DataTypes.STRING,
            },
            city: DataTypes.STRING,
            postalCode: DataTypes.STRING,
            country: DataTypes.STRING,
            details: DataTypes.STRING,
            latitude: {
                type: DataTypes.DECIMAL(15, 12),
            },
            longitude: {
                type: DataTypes.DECIMAL(15, 12),
            },
        },
        {
            sequelize,
            modelName: 'UsersContactsAddress',
        }
    );
    return UsersContactsAddress;
};
