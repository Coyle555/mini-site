import React from 'react'
import golf from '../images/background2.jpg'
import title from '../images/title.svg'
import { Helmet } from 'react-helmet'


function Home() {

    return (
        <>
        <Helmet>
            <title>BBK Golf Outing</title>
            <meta 
            name='description'
            description='Building blocks for kids anual golf outing' 
            />
            <meta 
            name='keywords'
            content='building, blocks, kids, golf, outing,'
            />
        </Helmet>
        <div    style={{ background: `url(${golf})`, backgroundSize: 'cover', backgroundPosition: 'bottom center', width:'100%'}}
                className='middle'>
                <img alt='BBK' src={title} style={{width: '70%', margin: '0px 15%', maxWidth: '600px'}}></img>
        </div>
        </>
    )
}

export default Home
