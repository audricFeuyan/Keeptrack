import { Formik } from 'formik';
import { FC, ReactElement, useState } from 'react';
import { Project } from './Project';
import { ProjectService } from './ProjectService';

interface ProjectFormProps {
    project: Project
};

const projectFormInitialValues = {
    id: 0,
    name: "",
    description: "",
    imageUrl: "",
    contractTypeId: 0,
    contractSignedOn: new Date(),
    budget: 0,
    isActive: false
};

const ProjectForm: FC<ProjectFormProps> = ({ project }: ProjectFormProps): ReactElement => {
    const [updatingStatus, setUpdatingStatus] = useState(0);
    const projectService = new ProjectService();

    const handleFieldBlur = (projectId: number, e: any, callback: any) => {
        callback(e);
        console.log(e);
        setUpdatingStatus(1);
        const value = e.currentTarget.value;
        const key = e.currentTarget.name;
        const jsonText = `{ "${key}": "${value}" }`;
        const patchPayload = JSON.parse(jsonText);
        projectService.patchProject(projectId, patchPayload).then(response => {
            console.log(response);
            setUpdatingStatus(2);
        }).catch(error => {
            console.log(error);
            setUpdatingStatus(2);
        });
    }

    return(
        <div className="cols-sm">
            <h2>Update project</h2>
            <Formik
                initialValues={project}
                enableReinitialize={true}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(()=>{
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
                validate={values => {
                    const errors = {
                        name: "",
                        description: "",
                        imageUrl: "",
                        contractTypeId: "",
                        contractSignedOn: "",
                        budget: "",
                        isActive: ""
                    };
                    if(values.name.length === 0){
                        errors.name = "Name is required";
                    }
                    return errors;
                }}
            >
                {
                    ({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name"></label>
                                <input 
                                    name="name" 
                                    type="text"
                                    onChange={handleChange}
                                    onBlur={e => handleFieldBlur(values.id, e, handleBlur)}
                                    value={values.name} 
                                />
                                <span>
                                    {
                                        updatingStatus === 1 && "Updating..."
                                    }
                                    {
                                        updatingStatus === 2 && "Done"
                                    }
                                </span>
                                <p>
                                    {
                                        errors.name && touched.name && errors.name
                                    }
                                </p>
                            </div>

                            <div>
                                <label htmlFor="description"></label>
                                <input 
                                    name="description" 
                                    type="text"
                                    onChange={handleChange}
                                    onBlur={e => handleFieldBlur(values.id, e, handleBlur)}
                                    value={values.description} 
                                />
                                <p>
                                    {
                                        errors.description && touched.description && errors.description
                                    }
                                </p>
                            </div>

                            {/*<button type="submit" disabled={isSubmitting} >Save</button>*/}
                        </form>
                    )
                }
            </Formik>
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

ProjectForm.defaultProps = {
    project: projectFormInitialValues
};

export default ProjectForm;