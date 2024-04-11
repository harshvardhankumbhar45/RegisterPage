import styled from "styled-components";
import { Button } from "./Login";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signUpSchema } from "../schema";

const Register = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      dob: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      console.log(values);
      try {
        const response = await fetch("http://localhost:4000/test/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(values)
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();

        if (responseData && responseData.status === 404) {
          alert("Registration failed!!");
        } else {
          alert("Registration successful!!");
          navigate('/login');
        }
      } catch (error) {
        console.error('Error:', error);
        alert("An error occurred during registration. Please try again later.");
      }
    }
  });

  return (
    <Container>
      <h1>SignUp Form</h1>
      <Form onSubmit={formik.handleSubmit}>
        <FormData>
          <div className="formValues">
            <label htmlFor="name">Username: </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <ErrorMessage className="error">{formik.errors.name}</ErrorMessage>
            ) : null}
          </div>

          <div className="formValues">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <ErrorMessage className="error">{formik.errors.email}</ErrorMessage>
            ) : null}
          </div>

          <div className="formValues">
            <label htmlFor="mobile">Mobile Number: </label>
            <input
              type="text"
              name="mobile"
              id="mobile"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.mobile}
            />
            {formik.touched.mobile && formik.errors.mobile ? (
              <ErrorMessage className="error">{formik.errors.mobile}</ErrorMessage>
            ) : null}
          </div>

          <div className="formValues">
            <label htmlFor="dob">Date-of-birth: </label>
            <input
              type="date"
              name="dob"
              id="dob"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.dob}
            />
            {formik.touched.dob && formik.errors.dob ? (
              <ErrorMessage className="error">{formik.errors.dob}</ErrorMessage>
            ) : null}
          </div>

          <div className="formValues">
            <label htmlFor="mobile">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <ErrorMessage className="error">{formik.errors.password}</ErrorMessage>
            ) : null}
          </div>

          <div className="formValues">
            <label htmlFor="confirmPassword">Confirm Password: </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <ErrorMessage className="error">{formik.errors.confirmPassword}</ErrorMessage>
            ) : null}
          </div>
          {/* Repeat the above pattern for other fields */}
        </FormData>
        <div>
          <Button type="submit">Register</Button>
        </div>
      </Form>
    </Container>
  );
}

export default Register;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  max-width: 80%;
  min-height: 100vh;
  margin: 0 auto;
  color: white;

  h1{
      font-weight: 500;
      font-size: 40px;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const FormData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
    .formValues label, input{
      display: block;
      padding: 10px;
    }
    .formValues input {
        border-radius: 12px; 
        border: transparent;
        width:500px;
    }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: small;
`;
