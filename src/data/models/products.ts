import { Model, DataTypes, Sequelize } from 'sequelize';
import { IProductsEntity } from '~/data/contracts/products';

export default class Products extends Model implements IProductsEntity {
    readonly id: number;
    readonly userId: number;
    readonly categoryId: number;
    readonly label: string;
    readonly productCode: string;
    readonly units: string;
    readonly price: number;
    readonly tax?: number | undefined;
    readonly details?: string | undefined;
    readonly deletedAt?: Date | undefined;
    readonly createdAt: Date;
    readonly updatedAt: Date;

    static associate(models: any) {
        // define association here
    }
}
module.exports = (sequelize: Sequelize) => {
    Products.init(
        {
            label: DataTypes.STRING,
            productCode: DataTypes.STRING,
            units: DataTypes.STRING,
            price: DataTypes.DECIMAL,
            tax: DataTypes.DECIMAL,
            details: DataTypes.STRING,
            deletedAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'Products',
        }
    );
    return Products;
};
