import React from 'react'
import golf from '../images/background2.jpg'
import title from '../images/title.svg'


function Home() {
    document.title = 'BBK Golf Outing'
    return (
        <>
        <div style={{ background: `url(${golf})`, backgroundSize: 'cover', backgroundPosition: 'bottom center', width:'100%'}} className='middle'>
            <img alt='BBK' src={title} style={{width: '70%', margin: '0px 15%', maxWidth: '600px'}}></img>
        </div>
        </>
    )
}

export default Home
