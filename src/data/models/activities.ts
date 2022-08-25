import { Model, DataTypes, ModelStatic, Sequelize } from 'sequelize';
import { IMeetingsEntity } from '~/contracts/meetings';

export default class Meeting extends Model implements IMeetingsEntity {
    public readonly id: number;
    public readonly userId: number;
    public readonly contactId?: number;
    public readonly label: string;
    public readonly startAt: Date;
    public readonly endAt: Date;
    public readonly details?: string;
    public readonly createdAt: Date;
    public readonly updatedAt: Date;
    public readonly deletedAt?: Date;

    static associate(models: any) {
        this.hasMany(models.Users, { foreignKey: 'id', as: 'userId' });
    }
}

module.exports = (sequelize: any) => {
    Meeting.init(
        {
            userId: {
                type: DataTypes.INTEGER
            },
            label: {
                type: DataTypes.STRING,
                validate: {
                    len: {
                        args: [1, 50],
                        msg: 'meeting_label_len_incorrect',
                    },
                },
            },
            startAt: DataTypes.DATE,
            endAt: DataTypes.DATE,
            details: {
                type: DataTypes.STRING,
                validate: {
                    len: {
                        args: [1, 255],
                        msg: 'details_len_incorrect',
                    },
                },
            },
            deletedAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'Meeting',
        }
    );
    return Meeting;
};
