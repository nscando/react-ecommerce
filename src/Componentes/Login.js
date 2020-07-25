import React, { Component } from 'react'
import firebase from '../Config/firebase';
import { withRouter } from 'react-router-dom';
import { Card, Form, Button, Spinner, Alert } from 'react-bootstrap';
import { Formik } from 'formik';
import { ProductConsumer } from './context'



class Login extends Component {
     static contextType = ProductConsumer
     constructor(props) {
          super(props);
          this.state = {
               spinner: false,
               error: false
          }
     }


     render() {
          return (
               <>
                    <Card style={{ width: '80%', margin: 'auto' }}>
                         <Card.Body>
                              <Card.Title>Ingresar</Card.Title>
                              <Formik
                                   initialValues={{ email: '', password: '' }}
                                   validate={values => {
                                        const errors = {};
                                        /*  if (!values.password) {
  
                                               errors.password = 'Required';
                                          }
                                          if (!values.email) {
                                               errors.email = 'Required';
                                          } else if (
                                               !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                          ) {
                                               errors.email = 'Invalid email address';
                                          }*/

                                        return errors;
                                   }}
                                   onSubmit={(values, { setSubmitting }) => {
                                        this.setState({
                                             spinner: true
                                        })
                                        console.log(values.email, values.password)

                                        fetch("http://localhost:3000/login", {
                                             method: "POST",
                                             headers: {
                                                  'Content-type': 'application/json'
                                             },
                                             body: JSON.stringify({
                                                  user: values.email,
                                                  password: values.password
                                             })
                                        })

                                             .then(res => res.json())
                                             .then(
                                                  (result) => {
                                                       console.log(result)
                                                       this.setState({
                                                            spinner: false
                                                       })
                                                       setSubmitting(false);
                                                       localStorage.setItem("token", result.token)
                                                       this.context.loginUser(JSON.stringify(result.token))
                                                       const { history } = this.props;
                                                       history.push('/');
                                                  },
                                                  (error) => {
                                                       this.setState({
                                                            spinner: false,
                                                            error: true
                                                       })
                                                       setSubmitting(false);
                                                  }
                                             )




                                   }}
                              >
                                   {({
                                        values,
                                        errors,
                                        touched,
                                        handleChange,
                                        handleSubmit,
                                        isSubmitting,
                                        /* and other goodies */
                                   }) => (
                                             <Form onSubmit={handleSubmit}>
                                                  <Form.Group controlId="formBasicEmail">
                                                       <Form.Label>Email</Form.Label>
                                                       <Form.Control type="text" placeholder="Enter email" name="email" value={values.email} onChange={handleChange} />
                                                       {errors.email && touched.email && errors.email}
                                                  </Form.Group>

                                                  <Form.Group controlId="formBasicPassword">
                                                       <Form.Label>Password</Form.Label>
                                                       <Form.Control type="password" placeholder="Password" name="password" value={values.password} onChange={handleChange} />
                                                       {errors.password && touched.password && errors.password}
                                                  </Form.Group>

                                                  <Button variant="primary" type="submit" disabled={isSubmitting}>
                                                       {
                                                            this.state.spinner &&
                                                            <Spinner animation="border" variant="light" size="sm" />
                                                       }

                                                            Ingresar
                                                  </Button>
                                             </Form>
                                        )}
                              </Formik>
                              {this.state.error &&
                                   <>
                                        <Alert variant={'danger'}>
                                             Usuario y/o contraseña incorrecto
                                        </Alert>
                                   </>
                              }

                         </Card.Body>
                    </Card>

               </>
          )
     }
}

export default withRouter(Login);
