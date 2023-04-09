import { FC, ReactElement } from 'react';
import { Project } from './Project';

interface ProjectDetailProps {
    project: Project
};

const ProjectDetail: FC<ProjectDetailProps> = ({ project }: ProjectDetailProps): ReactElement => {
    return(
        <div className="cols-sm">
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

ProjectDetail.defaultProps = {
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

export default ProjectDetail;