import { FC, ReactElement } from 'react';
import { Formik } from 'formik';
import { Project } from './Project';

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
    
    return(
        <div className="cols-sm">
            <h2>Update project</h2>
            <Formik
                initialValues={project}
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
                        isSubmitting
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name"></label>
                                <input 
                                    name="name" 
                                    type="text"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name} 
                                />
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
                                    onBlur={handleBlur}
                                    value={values.description} 
                                />
                                <p>
                                    {
                                        errors.description && touched.description && errors.description
                                    }
                                </p>
                            </div>

                            <button type="submit" disabled={isSubmitting} >Save</button>
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