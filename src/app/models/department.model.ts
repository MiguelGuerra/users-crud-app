export class Department {
    id: number;
    name: string;
    numberOfEmployees: number;
    responsable: string;
    priority: string;
    tecnologiesOptions: string[];
    teams: {topLevel: string, lowLevel: string};
}