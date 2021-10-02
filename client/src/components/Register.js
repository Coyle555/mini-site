import React, { useState } from 'react'
import Axios from 'axios'

function Register() {
    const url ='https://615876535167ba00174bbb0e.mockapi.io/api/register'
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
        })
    }

    function handleSubmit(e) {
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }
    return (
        <div>
            <form onSubmit={(e) => submit(e)}>
                <input onChange={(e) => handleSubmit(e)} id='name' value={data.name} placeholder='name' type='text'></input>
                <input onChange={(e) => handleSubmit(e)} id='email' value={data.email} placeholder='email' type='text'></input>
                <button>Register!</button>
            </form>
            
        </div>
    )
}

export default Register
