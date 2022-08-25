// ENTITIES /////////////////////////////////////////////////////

export interface IUserEntity {
    id: number;
    firstName: string;
    lastName?: string;
    email: string;
    password: string;
    phone: string;
    status: UserTypeEnum;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

// ENUMERATIONS /////////////////////////////////////////////////////

export enum UserTypeEnum {
    Admin = 1,
    User = 2,
    Pending = 3,
}