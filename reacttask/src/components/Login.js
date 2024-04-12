import { useFormik } from 'formik';
import * as yup from 'yup';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ErrorMessage } from './Register';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false);

  const signUpSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  const ErrorLogin = <div>Credentials doesn't found</div>

  const formik = useFormik({
    // give initial values
    initialValues: {
      email: '',
      password: '',
    },

    // import the validation schema
    validationSchema: signUpSchema,

    // handle the submit, after click on button
    onSubmit: async (values) => {
      console.log("Values onSubmit = " + JSON.stringify(values));

      try {
        const response = await fetch('http://localhost:4000/test/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        const responseData = await response.json();
        console.log("Response Data = " +JSON.stringify(responseData));

        if (responseData && responseData.error) {
          alert('Invalid Credentials');
          setFlag(true);
        } else {
          alert('Login Successful');
          navigate('/');
        }
      } catch (error) {
        console.error(error);
        alert('An error occurred while logging in. Please try again later.');
      }
    },
  });

  return (
    <Container>
      <h1>Login Form</h1>
      <Form onSubmit={formik.handleSubmit}>
        <div className="input">
          <div className="formdata">
            <label htmlFor="email">Email: </label>
            <input
              onChange={formik.handleChange}
              type="email"
              name="email"
              id="email"
              required
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </div>

          {formik.touched.email && formik.errors.email ? (
            <ErrorMessage>{formik.errors.email}</ErrorMessage>
          ) : null}
          <div className="formdata">
            <label htmlFor="password">Password: </label>
            <input
              onChange={formik.handleChange}
              type="password"
              name="password"
              id="password"
              required
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
          </div>
          {formik.touched.password && formik.errors.password ? (
            <ErrorMessage>{formik.errors.password}</ErrorMessage>
          ) : null}
        </div>
        {
          flag ? <NavLink to="/register" className="navlink">Signup</NavLink> : null
        }
        <div>
          <Button type="submit">Login</Button>
        </div>
      </Form>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  margin: 0 auto;
  margin-top: 100px;
  max-width: 70%;
  height: 400px;
  color: white;

  h1 {
    font-weight: 500;
    font-size: 40px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  .formdata label,
  input {
    display: block;
    padding: 10px;
  }
  .input {
    margin-top: 20px;
    margin-bottom: 28px;
  }

  .formdata input {
    width: 500px;
    border-radius: 12px;
    border: 1px solid black;
  }

  .navlink {
    color: white;
    text-decoration: none;
    margin-top: -20px;
    margin-bottom: 10px;
    margin-left: 8px;
    &:hover {
      color: red;
      text-decoration: underline;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: green;
  color: white;
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 1rem;
  cursor: pointer;
  border: 1px solid transparent;

  &:hover {
    background-color: darkgreen;
    border: 1px solid white;
  }
`;


