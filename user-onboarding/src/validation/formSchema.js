import * as yup from 'yup';

const formSchema = yup.object().shape({
    firstName: yup
        .string()
        .min(3)
        .trim()
        .required('Bub, first name is required!'),
    lastName: yup
        .string()
        .trim()
        .required('Last name is required, bub!'),
    email: yup
        .string()
        .email()
        .required('Must have email ex: bub@captup.net'),
    password: yup
        .string()
        .trim()
        .required('Password is required!'),
    terms: yup.boolean()
})

export default formSchema