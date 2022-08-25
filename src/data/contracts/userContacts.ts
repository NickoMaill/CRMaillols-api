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

export interface IContactAddress {
    id: number;
    contactId: number,
    street?: string;
    city?: string;
    postalCode?: string;
    country?: string;
    details?: string;
    latitude?: number;
    longitude?: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}