import { FC, ReactElement } from 'react';
import { Project } from './Project';
import ProjectItem from './ProjectItem';

interface ProjectListProps {
    projects: Project[],
    projectSelectedHandler: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, currentProject: Project) => any
}

const  ProjectList: FC<ProjectListProps> = ({ projects, projectSelectedHandler }: ProjectListProps): ReactElement => {

    console.log("ProjectList is starting");
    return(
        <>
            <div className="row">
                {
                    projects.length === 0 && <p>Aucun projet existant !</p>
                }
                {
                    projects.map((project) => (
                        <ProjectItem project={project} 
                                     key={project.contractTypeId + '-' + project.contractSignedOn}
                                     projectSelectedHandler={projectSelectedHandler} />
                    ))
                }
            </div>            
        </>
    );
}

ProjectList.defaultProps = {
    projects: [],
};

export default ProjectList;