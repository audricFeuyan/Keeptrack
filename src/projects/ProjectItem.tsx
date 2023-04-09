import { FC, ReactElement } from 'react';
import { Project } from './Project';

interface ProjectItemProps {
    project: Project,
    projectSelectedHandler: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, currentProject: Project) => any,

};

const ProjectItem: FC<ProjectItemProps> = ({ project, projectSelectedHandler }: ProjectItemProps): ReactElement => {

    const setOnProjectSelected = (event: React.MouseEvent<HTMLDivElement, MouseEvent>):void => {
       
        projectSelectedHandler(event, project);
    };

    
    return(
        <div className="cols-sm" onClick={(e) => setOnProjectSelected(e)}>
            <div className="card">
                <img src={project.imageUrl} alt={project.name} />
                <section className="section dark">
                    <h5 className="strong">
                        <strong>{project.name}</strong>
                    </h5>
                    <p>{project.description}</p>
                    <p>Budget : {project.budget}</p>
                </section>
            </div>
        </div>
    );
};

ProjectItem.defaultProps = {
    project: {
        id: 0,
        name: "",
        description: "",
        imageUrl: "",
        contractTypeId: 0,
        contractSignedOn: new Date(),
        budget: 0,
        isActive: false
    }
};

export default ProjectItem;