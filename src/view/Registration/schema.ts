import * as yup from 'yup';

const schema = yup.object({
    name: yup
        .string()
        .required('Name is required'),
    email: yup
        .string()
        .email('Invalid email format')
        .required('Email is required'),
    password: yup
        .string()
        .min(6, 'The password must be at least 6 characters long')
        .max(20, 'The password must be at most 20 characters long')
        .required('The password is required'),
    role: yup
        .string()
        .oneOf(['student', 'teacher'], 'Role must be either student or teacher')
        .required('Role is required'),
}).required();

export default schema;