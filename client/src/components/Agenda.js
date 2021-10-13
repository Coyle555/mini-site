import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import './Agenda.css'
import golf from '../images/background2.jpg'
import ReactCardFlip from 'react-card-flip'




function Agenda() {
  document.title = 'Agenda'
  const [isFlipped, setIsFlipped] = useState(false)
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }
    return (
        <>
        <div style={{ background: `url(${golf})`, backgroundSize: 'cover', backgroundPosition: 'bottom center', width:'100%'}} className='middle'>
        <div>
        <ReactCardFlip flipDirection="vertical">
        <Card>
          <Card.Header as="h5">Event List for the Day</Card.Header>
          <Card.Body>
            <Card.Title>Click below to switch between event sections</Card.Title>
            <Card.Text>
            </Card.Text>
            <Button onClick={handleClick}>Click to flip</Button>
          </Card.Body>
        </Card>
        <Card>
        </Card>
      </ReactCardFlip>
      <br></br>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <Card>
          <Card.Header as="h5">Events 1-3</Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header as="h5">Events 4-7</Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
            <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </ReactCardFlip>
      </div>
      </div>
        </>
    )
}

export default Agenda
