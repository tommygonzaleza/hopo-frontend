import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { ValidateEmail } from './ValidateEmail';

const MyForm = () => {

    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    
    function handleSubmit(e){
        e.preventDefault();
        if(validateName(name) === true && validateName(lastname) === true && ValidateEmail(email) === true && validatePhoneNumber(phoneNumber) === true){
            fetch(
                "http://127.0.0.1:5000/user",
                {
                    method: "POST",
                    body: {
                        "name": JSON.stringify(name),
                        "lastname": JSON.stringify(lastname),
                        "email": JSON.stringify(email),
                        "phone_number": JSON.stringify(phoneNumber)
                   },
                    headers: {
                       "Content-type": "text/plain"
                   }
               }
           )
        } else {
            alert("Incorrect information")
        }

        setName("");
        setLastname("");
        setEmail("");
        setPhoneNumber("");
    }

    const validateName = (name) => {
        let nameA = name.split("");
        if(nameA.length > 1){
            return true
        } else {
            return false
        }
    }

    const validatePhoneNumber = (number) => {
        let numberA = number.split("");
        if(numberA.length > 10){
            return true
        } else {
            return false
        }
    }
    return (
        <div className="myform-styles" >
            <h3>Join our community.</h3>
            <form className="m-5" onSubmit={handleSubmit} >
                <div className="">
                    <label className="label-styles mb-1">NAME</label>
                    <input className="input-styles w-100" type="text" placeholder="Enter name" value={name} onChange={e => setName(e.target.value)} required />
                </div>
                <div className="mt-3">
                    <label className="label-styles mb-1">LASTNAME</label>
                    <input className="input-styles w-100" type="text" placeholder="Enter lastname" value={lastname} onChange={e => setLastname(e.target.value)} required />
                </div>
                <div className="mt-3">
                    <label className="label-styles mb-1">EMAIL</label>
                    <input className="input-styles w-100" type="text" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} required />
                </div>
                <div className="mt-3">
                    <label className="label-styles mb-1">PHONE NUMBER</label>
                    <input className="input-styles w-100" type="text" placeholder="Enter phone number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} required />
                </div>
                <input className="mt-3 d-block mx-auto mt-3 w-100 submit-button" type="submit" value="SUBMIT" />
            </form>
            <p className="">By submitting this form I agree to hopo <a href="">Terms and Conditions</a></p>
        </div>
        
    );
}

export default MyForm;



{/* <Form className="m-4" onSubmit={handleSubmit}>
    <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={name} onChange={e => setName(e.target.value)} required />
    </Form.Group>
    <Form.Group controlId="formBasicEmail">
        <Form.Label>Lastname</Form.Label>
        <Form.Control type="text" placeholder="Enter lastname" value={lastname} onChange={e => setLastname(e.target.value)} required />
    </Form.Group>
    <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} required />
    </Form.Group>
    <Form.Group controlId="formBasicEmail">
        <Form.Label>Phone number</Form.Label>
        <Form.Control type="text" placeholder="Enter phone number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} required />
    </Form.Group>
    <Button variant="primary" type="submit">
        Submit
    </Button>
</Form> */}