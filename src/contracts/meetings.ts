export interface IMeetingsEntity {
    id: number;
    userId: number;
    contactId?: number;
    label: string;
    startAt: Date;
    endAt: Date;
    details?: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}

export interface IMeetingAddressEntity {
    id: number;
    meetingId: number,
    street?: string;
    city?: string;
    postalCode?: string;
    country?: string;
    details?: string;
    latitude?: number;
    longitude?: number;
    createdAt?: Date;
    updatedAt?: Date;
}