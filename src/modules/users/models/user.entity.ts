import { Exclude } from 'class-transformer';

//define in UserEntity roles that can either be "ADMIN" or "USER"

export enum Roles {
    ADMIN = 'ADMIN',
    USER = 'USER',
}

export class UserEntity {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
    @Exclude()
    password: string;
    role: Roles;
}