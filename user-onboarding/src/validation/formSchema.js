import * as yup from 'yup';

const formSchema = yup.object().shape({
    first_name: yup
        .string()
        .min(3)
        .trim()
        .required('Bub, first name is required!'),
    last_name: yup
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
        .oneOf([true], 'You must agree to the Terms of Services')
})

export default formSchema