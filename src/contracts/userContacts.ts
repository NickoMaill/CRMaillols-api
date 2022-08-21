// ENTITIES /////////////////////////////////////////////////////

export interface IUserContactEntity {
    id: number;
    userId: number,
    firstName: string;
    lastName?: string;
    email?: string;
    phone?: string;
    society?: string;
    isFavorite?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}