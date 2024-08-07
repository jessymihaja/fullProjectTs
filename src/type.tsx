export interface FruitProps {
    id: number;
    nom: string;
    couleur: color;
}

export enum color {
    rouge = 'rouge',
    vert = 'vert',
    bleu = 'bleu'
}

export interface EmployeProps {
    id: number;
    nom: string;
    job: string;
    picUrl:string;
}