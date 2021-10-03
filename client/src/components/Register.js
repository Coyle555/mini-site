import React, { useState } from 'react'
import Axios from 'axios'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import './Register.css'

function Register() {
    const url ='http://localhost:3002/api'
    const [data, setData] = useState({
        name: '',
        email: ''
    })

    function submit(e) {
        e.preventDefault()
        Axios.post(url, {
            name: data.name,
            email: data.email
        })
        .then(res => {
            console.log(res.data)
            setData({
                name: '',
                email: ''
            })
        })
    }

    function handleSubmit(e) {
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }
    return (
        <>
            <Container className='center font-link'>
            <Row>
            <Col>
            <Card className='mt-5' style={{ width: '30rem', height:'16rem' }}>
            <Card.Header>Registration</Card.Header>
            <Card.Body>
                    <Form>
                    <Form.Group>
                    <Form.Label htmlFor='name'></Form.Label>
                        <Form.Control onChange={(e) => handleSubmit(e)} id='name' value={data.name} placeholder='First and Last Name' type='text'></Form.Control>
                    </Form.Group>
                    <Form.Group>
                    <Form.Label htmlFor='email'></Form.Label>
                        <Form.Control onChange={(e) => handleSubmit(e)} id='email' value={data.email} placeholder='Email Address' type='text'></Form.Control>
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Button onClick={(e) => submit(e)} className='row-center'>Register!</Button>
                    </Form.Group>
                    </Form>
            </Card.Body>
            </Card>
            </Col>
            </Row>
            </Container>
                    
        </>
    )
}

export default Register
