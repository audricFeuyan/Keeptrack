import { PartialProject } from "./PartialProject";

const baseUrl = "http://localhost:3000";

export class ProjectService {
    public async getProjects(): Promise<any> {
        const response = await fetch(baseUrl + '/projects');
        return await response.json();
    }

    public async patchProject(projectId: number, partialProject: PartialProject): Promise<any> {
        const response = await fetch(baseUrl + '/projects/'+projectId, {
            method: 'PATCH',
            body: JSON.stringify(partialProject),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        });
        return await response.json();
    }
}