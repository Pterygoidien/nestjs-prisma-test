export interface Course {
    id: number;
    name: string;
    description: string;
    date: string;
    authors: string[];
    contributors: string[];
    access: access;
    tags: string[];
    partnerships: string[];
    specialities: string[];
    URLparams: string;
    imageURL: string;

}
type access = 'public' | 'member' | 'premium' | 'private' | 'paid' | 'owner';
