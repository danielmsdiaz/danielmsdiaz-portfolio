export interface Review {
    id?: number;
    name: string;
    role: string;
    review: string;
    github?: string;
    linkedin?: string;
    status?: boolean;
    createdAt?: any;
}