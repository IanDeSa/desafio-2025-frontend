export type RegistrationType = {
    name: string;
    email: string;
    password: string;
    role: "student" | "teacher";
};

export type CreateUserResponseDto = {
    id: number;
    name: string;
    email: string;
    role: "student" | "teacher";
    createdAt: Date;
    updatedAt: Date;
};