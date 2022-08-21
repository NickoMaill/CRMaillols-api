import { DataTypes, Model } from 'sequelize';
import { IUserEntity, UserTypeEnum } from '~/contracts/user';

export default class Users extends Model implements IUserEntity{
  public id: number;
  public firstName: string;
  public lastName?: string;
  public email: string;
  public password: string;
  public phone: string;
  public status: UserTypeEnum;
  public createdAt?: Date;
  public updatedAt?: Date;
  public deletedAt?: Date;
  
  static associate(models: any) {
    // define association here
  }
}
module.exports = (sequelize: any) => {
    Users.init(
        {
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: {
                        msg: 'fistName_len_incorrect',
                        args: [1, 50],
                    },
                },
            },
            lastName: {
                type: DataTypes.STRING(50),
                validate: {
                    len: {
                        msg: 'lastName_len_incorrect',
                        args: [1, 50],
                    },
                },
            },
            email: {
                type: DataTypes.STRING(60),
                allowNull: false,
                unique: true,
                validate: {
                  len: {
                    args: [1, 60],
                    msg: 'email_len_incorrect'
                  },
                  isEmail: {
                    msg: 'email_format_incorrect'
                  }
                }
            },
            phone: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                  is: {
                    args: /^\+[1-9]\d{1,14}$/,
                    msg: 'phone_number_format_incorrect'
                  },
                },
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            type: {
                type: DataTypes.INTEGER,
                validate: {
                  min: {
                    msg: 'type_min_incorrect',
                    args: [UserTypeEnum.Admin]
                  },
                  max: {
                    msg: 'type_max_incorrect',
                    args: [UserTypeEnum.Pending]
                  }
                },
                defaultValue: UserTypeEnum.User,
            },
            resetPasswordToken: {
              type: DataTypes.STRING,
            },
        },
        {
            sequelize,
            modelName: 'Users',
        }
    );
    return Users;
};
