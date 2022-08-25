import { DataTypes, Model, ModelStatic, Sequelize } from 'sequelize';
import { IUserContactEntity } from '~/data/contracts/userContacts';

export default class UsersContacts extends Model implements IUserContactEntity {
    id: number;
    userId: number;
    firstName: string;
    lastName?: string;
    email?: string;
    phone?: string;
    society?: string;
    isFavorite?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;

    static associate(models: { Users: ModelStatic<Model<any, any>>; }) {
        this.hasMany(models.Users, { foreignKey: 'id', as: 'userId' });
    }
}
module.exports = (sequelize: any) => {
    UsersContacts.init(
        {
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: {
                        msg: 'firstName_len_incorrect',
                        args: [1, 50],
                    },
                },
            },
            lastName: {
                type: DataTypes.STRING,
                validate: {
                    len: {
                        msg: 'lastName_len_incorrect',
                        args: [1, 50],
                    },
                },
            },
            email: {
                type: DataTypes.STRING,
                validate: {
                    len: {
                        msg: 'email_len_incorrect',
                        args: [1, 60],
                    },
                },
            },
            phone: {
                type: DataTypes.STRING,
                validate: {
                    is: {
                        args: /^\+[1-9]\d{1,14}$/,
                        msg: 'phone_number_format_incorrect',
                    },
                },
            },
            society: {
                type: DataTypes.STRING,
                validate: {
                    len: {
                        msg: 'email_len_incorrect',
                        args: [1, 60],
                    },
                },
            },
            isFavorite: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            },
            deletedAt: { type: DataTypes.DATE },
        },
        {
            sequelize,
            modelName: 'UsersContacts',
        }
    );
    return UsersContacts;
};
