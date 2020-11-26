export class Department {
    id?: string;
    name: string;
    numberOfEmployees: string;
    responsable: string;
    priority?: string;
    tecnologiesOptions?: string[];
    teams?: {topLevel: string, lowLevel: string};
}