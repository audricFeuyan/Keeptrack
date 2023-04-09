import {FC, ReactElement, useState, useEffect} from 'react';
import ProjectList from './ProjectList';
import { Project } from './Project';
import { ProjectService } from './ProjectService';
import ProjectDetail from './ProjectDetail';
import ProjectForm from './ProjectForm';

const projectService = new ProjectService();

const ProjectsPage: FC = (): ReactElement => {
    const [projects, setProjects] = useState([]);
    const [currentProject, setCurrentProject] = useState<Project | undefined>(undefined);

    const getProjects = () => {
        projectService.getProjects().then(response => {
            setProjects(response);
        }).catch(error => {
            console.log(error);
        });        
    }

    const onProjectSelectedHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, selectedProject: Project): void => {
        event.preventDefault();
        setCurrentProject({...selectedProject});
    };

    useEffect(()=>{
        getProjects();
    }, []);

    console.log("ProjectsPage is starting: ", currentProject);

    return(
        <>
            <h1>Projects</h1>
            <div className="row">
                {
                    projects.length === 0 ?
                    <p>red</p> :
                    <p>blue</p>
                }
            </div>
            <div className="row">
                <div className="cols-sm">
                    {
                        !currentProject && <p>No item selected !</p>
                    }
                    {
                        currentProject && 
                        <ProjectForm
                            project = {currentProject}
                        />
                    }
                    
                </div>
                <div className="cols-sm">
                    <ProjectList projects={projects} projectSelectedHandler={onProjectSelectedHandler} />
                </div>                
            </div>
            
        </>
    )
}

export default ProjectsPage;