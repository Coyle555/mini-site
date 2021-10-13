import React, { useState } from 'react'
import Axios from 'axios'
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import './Register.css'
import golf from '../images/background2.jpg'

function Register() {
    document.title = 'Register'
    const [errors, setErrors] = useState({})

    const url ='https://615876535167ba00174bbb0e.mockapi.io/api/register'
    const [data, setData] = useState({
        name: '',
        email: '',
        phoneNum: '',
        shirt: '',
        handicap: ''
    })

    function submit(e) {
        e.preventDefault()
        const openErrors = errorFind()
        if (Object.keys(openErrors).length > 0) {setErrors(openErrors)} else {
        
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
            setErrors({})
            alert('Thanks for registering!')
        })
    }
}

    function handleSubmit(e) {
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)

    }
    function errorFind() {
        const {name, email, phoneNum, shirt, handicap} = data
        const emailRegex = /\S+@\S+\.\S+/;
        const openErrors = {}
        if (!name || name === '') {openErrors.name = 'You must enter a name'}
        if (!email || email === '') {openErrors.email = 'You must enter a valid email'}
            else if(!emailRegex.test(email)) {openErrors.email = "You must enter a valid email"}
        if (phoneNum.length < 10 || phoneNum.length > 10 ) {openErrors.phoneNum = 'You must enter a 10 digit phone number'}
        if (!shirt || shirt === '' ) {openErrors.shirt = 'You must select a shirt size'}
        if (handicap === '' || handicap.length > 2)  {openErrors.handicap = 'Please enter one or two numbers'}
        return openErrors

    }
    return (
        <>
            <div style={{ background: `url(${golf})`, backgroundSize: 'cover', backgroundPosition: 'bottom center', width:'100%'}} className='middle'>
            <Row className='tag font-link'>
            <Col>
            <Card style={{ width: '30rem'}}>
            <Card.Header>Registration</Card.Header>
            <Card.Body>
                    <Form >
                    <Form.Group >
                    <Form.Label htmlFor='name'></Form.Label>
                        <Form.Control
                            style={{padding:'3px'}} 
                            onChange={handleSubmit}
                            id='name' 
                            value={data.name} 
                            placeholder='First and Last Name' 
                            type='text'
                            isInvalid={errors.name} />
                        <Form.Control.Feedback style={{fontSize: '11px'}} type='invalid'>
                            {errors.name}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                    <Form.Label htmlFor='email'></Form.Label>
                        <Form.Control
                            style={{padding:'3px'}} 
                            onChange={handleSubmit}
                            id='email' value={data.email} 
                            placeholder='Email Address' 
                            type='email'
                            isInvalid={errors.email} />
                        <Form.Control.Feedback style={{fontSize: '11px'}} type='invalid'>
                            {errors.email}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                    <Form.Label htmlFor='phone'></Form.Label>
                        <Form.Control
                            style={{padding:'3px'}} 
                            onChange={handleSubmit} 
                            id='phoneNum' value={data.phoneNum} 
                            placeholder='Phone Number (5555555555)' 
                            type='number'
                            isInvalid={errors.phoneNum} />
                    <Form.Control.Feedback style={{fontSize: '11px'}} type='invalid'>
                        {errors.phoneNum}
                    </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                    <Form.Label htmlFor='shirtSize'></Form.Label>
                        <Form.Control
                            style={{padding:'3px'}}
                            as='select' 
                            onChange={handleSubmit} 
                            id='shirt' value={data.shirt} 
                            placeholder='Select a shirt size'
                            isInvalid={errors.shirt}>
                                <option value=''>Select a shirt size</option>
                                <option value='small'>Small</option>
                                <option value='medium'>Medium</option>
                                <option value='large'>Large</option>
                                <option value='xl'>Extra Large</option>
                        </Form.Control>
                        <Form.Control.Feedback style={{fontSize: '11px'}} type='invalid'>
                            {errors.shirt}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                    <Form.Label htmlFor='handicap'></Form.Label>
                        <Form.Control
                            style={{padding:'3px'}} 
                            onChange={handleSubmit} 
                            id='handicap' value={data.handicap} 
                            placeholder='Golf Handicap (+)' 
                            type='number' 
                            isInvalid={errors.handicap}/>
                        <Form.Control.Feedback style={{fontSize: '11px'}} type='invalid'>
                            {errors.handicap}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Button 
                            style={{background: 'rgba(43, 153, 226, 0.747)',
                            paddingLeft:'3px',
                            paddingBottom:'0.5px',
                            paddingRight:'3px', paddingTop:'0.5px',
                            fontSize:'17px'}} 
                            onClick={submit}>Register
                        </Button>
                    </Form.Group>
                    </Form>
            </Card.Body>
            </Card>
            </Col>
            </Row>
            </div>
                    
        </>
    )
}

export default Register
