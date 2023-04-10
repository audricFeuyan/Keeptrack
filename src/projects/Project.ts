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

export type ProjectsContextType = {
    projects: Project[];
    saveProject: (project: Project) => void;
    updateProject: (id: number) => void;
    patchProject: (id: number) => void;
};