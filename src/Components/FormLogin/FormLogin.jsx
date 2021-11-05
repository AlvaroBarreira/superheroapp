import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import sendData from '../../Services/check'
import './FormLogin.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';

function FormLogin() {

    const history = useHistory()


    //Function onSubmit, post petition
    const sendValues = async (values) => {
        
        const error = await sendData(values.email, values.password);

        error ? console.log('error') : history.push('/Home')
    }


    return (


        //Validations with Formik library
        <Formik

            initialValues={{
                email: '',
                password: '',

            }}

            validate={(values) => {
                let errors = {}

                //Email validation
                if (!values.email) {
                    errors.email = 'please submit a email'
                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
                    errors.email = 'Please submit a correct email'
                }

                //Password validation
                if (!values.password) {
                    errors.password = 'please submit a password'
                } else if (values.password.length < 4 || values.password.length > 20) {
                    errors.password = 'Please submit a correct password'
                }

                return errors;

            }}

            onSubmit={(values) => {
                sendValues(values)
            }}
        >
            {({ errors }) => (

            <div className="form-container">
                <Form className="form-login">
                    <h1 className="title-form">LOG IN</h1>
                    <div className="mb-3" controlId="formBasicEmail">
                      
                        <Field
                            type="email"
                            placeholder="Example: challenge@gmail.com"
                            id="email"
                            name="email"
                            className="email"
                    
                        />
                         <ErrorMessage name="email"  component={() => (
                            <span className="text-danger text-center">
                                {errors.email}
                            </span>
                        )} />

                    </div>

                    <div className="mb-3" controlId="formBasicPassword">
                      
                        <Field
                            type="password"
                            placeholder="Password"
                            id="password"
                            name="password"
                            className="password"
                        
                        />
                        <ErrorMessage name="password" component={() => (
                            <span className="text-danger">
                                {errors.password}
                            </span>
                        )} />
                   
                    </div>
                
                    <Button className="btn-form" variant="primary" type="submit">
                        Submit
                    </Button>

                    <p className="forgot">Forgot your password?</p>

                    <p className="account">Don't have an account?</p>
                </Form>
              </div>  
            )}
        </Formik>
    )
}

export default FormLogin
