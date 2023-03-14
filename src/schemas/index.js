import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required(),
    password: yup.string().min(7).matches(passwordRules, { message: "Enter strong password" }).required
});

