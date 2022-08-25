// ENTITIES /////////////////////////////////////////////////////

export interface IProductsEntity {
    id: number;
    userId: number;
    categoryId: number;
    label: string;
    productCode: string;
    units: string;
    price: number;
    tax?: number;
    details?: string;
    deletedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}

export interface IProductCategoryEntity {
    id: number;
    userId: number;
    label: string;
    deletedAt: Date;
    createdAt: Date;
    updatedAt: Date;
}