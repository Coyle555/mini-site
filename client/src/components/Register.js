import React, { useState } from 'react'
import Axios from 'axios'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import './Register.css'

function Register() {
    const url ='http://localhost:3002/api'
    const [data, setData] = useState({
        name: '',
        email: '',
        phoneNum: '',
        shirt: '',
        handicap: ''
    })

    function submit(e) {
        e.preventDefault()
        Axios.post(url, {
            name: data.name,
            email: data.email,
            phoneNum: data.phoneNum,
            shirt: data.shirt,
            handicap: data.handicap
        })
        .then(res => {
            console.log(res.data)
            setData({
                name: '',
                email: '',
                phoneNum: '',
                shirt: '',
                handicap: ''
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
            <Container className='middle font-link'>
            <Row className='tag'>
            <Col>
            <h4>Please fill out the form below to register!</h4>
            <Card className='mt-5' style={{ width: '30rem', height:'28rem' }}>
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
                    <Form.Group>
                    <Form.Label htmlFor='phone'></Form.Label>
                        <Form.Control onChange={(e) => handleSubmit(e)} id='phoneNum' value={data.phoneNum} placeholder='Phone Number' type='text'></Form.Control>
                    </Form.Group>
                    <Form.Group>
                    <Form.Label htmlFor='shirtSize'></Form.Label>
                        <Form.Control onChange={(e) => handleSubmit(e)} id='shirt' value={data.shirt} placeholder='Shirt Size' type='text'></Form.Control>
                    </Form.Group>
                    <Form.Group>
                    <Form.Label htmlFor='handicap'></Form.Label>
                        <Form.Control onChange={(e) => handleSubmit(e)} id='handicap' value={data.handicap} placeholder='Golf Handicap' type='text'></Form.Control>
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Button style={{background: 'rgba(43, 153, 226, 0.747)'}} onClick={(e) => submit(e)}>Register!</Button>
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
