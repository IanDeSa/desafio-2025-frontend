export type UserType = {
    id: number;
    name: string;
    email: string;
    role: 'student' | 'teacher';
    createdAt: string;
    updatedAt: string;
};