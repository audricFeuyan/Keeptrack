import React, {useEffect} from 'react';
import { ProjectsContextType, Project } from "./Project";

export const ProjectsContext = React.createContext<ProjectsContextType | null>(null);

interface ProjectsProviderProps {
    children: React.ReactNode;
};

const ProjectsProvider: React.FC<ProjectsProviderProps> = ({ children }) => {
    const [projects, setProjects] = React.useState<Project[]>([]);

    useEffect(()=>{

    }, []);

    const getProject = () => {

    };

    const saveProject = (project: Project) => {
        const newProject: Project = {
            id: Math.random(),
            name: project.name,
            description: project.description,
            imageUrl: project.imageUrl,
            contractTypeId: project.contractTypeId,
            contractSignedOn: project.contractSignedOn,
            budget: project.budget,
            isActive: project.isActive
        };

        setProjects([...projects, newProject]);
    };

    const updateProject = (id: number) => {
        projects.filter((project: Project) => {
            if(project.id === id) {
                project.isActive = true;
                setProjects([...projects]);
            }
        })
    }

    const patchProject = (id: number) => {
        projects.filter((project: Project) => {
            if(project.id === id) {
                project.isActive = true;
                setProjects([...projects]);
            }
        })
    }

    return(
        <ProjectsContext.Provider value={{projects, saveProject, updateProject, patchProject}}>
            {children}
        </ProjectsContext.Provider>
    );
};

export default ProjectsProvider;