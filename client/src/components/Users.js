import React, { useState } from 'react'

function Users() {
    const [results, setResults] = useState()
    const displayData = async () => {
        const dataLink = 'https://localhost:3002/api'
        const response = await fetch(dataLink)
        const data = await response.json()
        setResults(data)
        console.log(results)
    }
    return (
        <div>
            <h5>{results}</h5>
        </div>
    )
}

export default Users
