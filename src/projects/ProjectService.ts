import { Project } from "./Project";

const baseUrl = "http://localhost:3000";

export class ProjectService {
    public async getProjects(): Promise<any> {
        const response = await fetch(baseUrl + '/projects');
        return await response.json();
    }
}