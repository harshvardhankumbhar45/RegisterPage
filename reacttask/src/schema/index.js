import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(40).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    mobile: Yup.number().min(10).required("Please enter your mobile number"),
    dob: Yup.date().required("Please fill the Date-of-birth"),
    password: Yup.string().min(8).required("Please enter your password"),
    confirmPassword: Yup.string().required().oneOf([Yup.ref('password')], "Password must match")
})