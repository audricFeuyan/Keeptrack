export interface Project {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    contractTypeId: number;
    contractSignedOn: Date;
    budget: number;
    isActive: boolean;
};