import { IsString, IsNotEmpty } from 'class-validator';

type access = 'public' | 'member' | 'premium' | 'private' | 'paid' | 'owner';

export class CreateCourseDto {
    id: number;
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsString()
    @IsNotEmpty()
    description: string;
    @IsString()

    date: string;
    @IsString()

    authors: string[];
    @IsString()

    contributors: string[];
    @IsString()
    @IsNotEmpty()
    access: access;
    @IsString()

    tags: string[];
    @IsString()

    partnerships: string[];
    @IsString()

    specialities: string[];
    @IsString()

    URLparams: string;
    @IsString()
    imageURL: string;

}
