import * as yup from 'yup';

const schema = yup.object({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'The password must be at least 6 characters long')
    .max(20, 'The password must be at most 20 characters long')
    .required('The password is required'),
}).required();

export default schema;