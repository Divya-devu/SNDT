import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Registration = () => {
  return (
    <>
    <Form>
      <h1 className='contactForm'>Registration From</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label><b>Student Full Name</b></Form.Label>
        <Form.Control type="text" placeholder="Enter Name" /><br/>

        <Form.Label><b>Father Name</b></Form.Label>
        <Form.Control type="text" placeholder="Enter Name" /><br/>

        <Form.Label><b>Mother Name</b></Form.Label>
        <Form.Control type="text" placeholder="Enter Name" /><br/>

        <Form.Label><b>Education Details</b></Form.Label>
        <Form.Control type="text" placeholder="Enter Education Deatils" /><br/>

        <Form.Label><b>Gender</b></Form.Label>
        <Form.Check
          value="design"
          type="radio"
          aria-label="radio 1"
          label="Male"
          />
          <Form.Check
          value="design"
          type="radio"
          aria-label="radio 2"
          label="Female"
          />
          <Form.Check
          value="design"
          type="radio"
          aria-label="radio 3"
          label="Other"
          /><br/>

        <Form.Label><b>Mobile Number</b></Form.Label>
        <Form.Control type="text" placeholder="Enter Mobile Number" /><br/>

        <Form.Label><b>Email address</b></Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    </>  )
}
