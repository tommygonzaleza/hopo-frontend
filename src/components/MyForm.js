import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const MyForm = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 col-md-8 mx-auto">
                    <Card className="card-form">
                        <Card.Body className="">
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Lastname</Form.Label>
                                    <Form.Control type="text" placeholder="Enter lastname" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Phone number</Form.Label>
                                    <Form.Control type="text" placeholder="Enter phone number" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Control as="select">
                                        <option>Male</option>
                                        <option>Female</option>
                                    </Form.Control>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            
            
        </div>
    );
}
 
export default MyForm;