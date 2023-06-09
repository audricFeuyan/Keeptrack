export interface PartialProject {
    id?: number | undefined;
    name?: string;
    description?: string;
    imageUrl?: string;
    contractTypeId?: number | undefined;
    contractSignedOn?: Date;
    budget?: number;
    isActive?: boolean;
};