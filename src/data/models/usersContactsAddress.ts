import { Model, DataTypes, ModelStatic } from 'sequelize';
class UsersContactsAddress extends Model {
    static associate(models: any) {
        // define association here
    }
}
module.exports = (sequelize: any) => {
    UsersContactsAddress.init(
        {
            street: DataTypes.STRING,
            city: DataTypes.STRING,
            postalCode: DataTypes.STRING,
            country: DataTypes.STRING,
            details: DataTypes.STRING,
            latitude: DataTypes.DECIMAL,
            longitude: DataTypes.DECIMAL,
        },
        {
            sequelize,
            modelName: 'UsersContactsAddress',
        }
    );
    return UsersContactsAddress;
};
